/* eslint-disable @typescript-eslint/no-unused-vars */
// rg779@cornell.edu or richardgu.com
import { useState, useEffect, useRef } from "react";
import { getSocket } from "../../API/socket";
import { toast } from "react-toastify";
import { useContextStore } from "../../Store/Context";
import { MdOutlineEmojiEmotions } from "react-icons/md";
// utils/dateUtils.ts
import { isToday, isYesterday, parseISO, format } from "date-fns";
import EmojiPicker from "emoji-picker-react";
import { IoSend } from "react-icons/io5";
import { NavLink, useLocation, useParams } from "react-router-dom";
import {
  useQueryChatUser,
  useQuerySinglePropertyFunction,
} from "../../Hooks/useQuery";
import Profile from "../../Images/Profile_avatar_placeholder_large.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CustomButtonGroup from "../../Functions/CarouselBtn/CarouselBtn";
import Notification_Sound from "../../Components/Audio/sms-185447.mp3";
import { propertiesType } from "../../Types/property.types";
import {  usersType } from "../../Types/user.types";
import {
  messageType,
  messagesType,
  EmojiClickData,
  firstTimeType,
} from "../../Types/chat.types";
const Chat = () => {
  const { owner, tenant } = useParams();
  const location = useLocation();
  const { propertyId, title, price } = location.state || {};

  const [cbMessage, setCbMessage] = useState<string>("");
  const [messageSent, setMessageSent] = useState<string | undefined>(undefined);
  const [messageReceived, setMessageReceived] = useState<messageType | null>(
    null
  );
  const [userInfo, setUserInfo] = useState<usersType | null>(null);
  const [firstTime, setFirstTime] = useState<boolean>(false);
  const [firstTimeDetail, setFirstTimeDetail] = useState<firstTimeType | null>(
    null
  );
  const [propertyDetail, setPropertyDetail] = useState<propertiesType | null>(
    null
  );
  const [showPicker, setShowPicker] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const socket = getSocket();
  const { user } = useContextStore();
  const { data } = useQueryChatUser(`/chat/user-info/${owner}/${tenant}`);

  //get request for the property
  const { data: Property } = useQuerySinglePropertyFunction(
    `/property/${propertyId}`
  );

  useEffect(() => {
    //if user is messaging for the firstTime (boolean)
    setFirstTime(data?.firstTime);

    //if user is messaging for the firstTime update the user and receiver detail to firstTimeDetail
    if (data?.firstTime === true) {
      setFirstTimeDetail(data?.user);
    }
    //if user is messaging for the firstTime is false update the user and receiver detail to userInfo
    if (data?.firstTime === false) {
      setUserInfo(data?.user);
    }

    if (Property) {
      setPropertyDetail(Property?.property);
    }

    if (!socket.connected) socket.connect();
    socket.on("connect", () => {
      return socket.id;
    });

    socket.emit(
      "join-room",
      {
        room: `${owner}/${tenant}`,
        propertyId: `${propertyId}`,
        receiver: owner,
      },
      (message: string) => {
        // cbMessage(message);
        // console.log(message);
      }
    );

    socket.on(
      "get-all-message",
      (msg: messageType, data: { id: string; message: string }) => {
        if (socket.id !== data.id && audioRef.current) {
          toast.info("New Message Alert");
          audioRef.current.play();
        }
        setMessageReceived(msg);
      }
    );

    socket.on("get-all-messages", (msg: messageType) => {
      setMessageReceived(msg);
    });
    return () => {
      socket.off("get-all-message");
      socket.off("get-all-messages");
      socket.off("join-room");
      socket.disconnect();
    };
  }, [data, Property]);

  const messageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageSent(e.target.value);
  };

  // send message function
  const sendMessage = () => {
    if (!messageSent) return;
    socket.emit("send-message", messageSent, {
      room: `${owner}/${tenant}`,
      propertyId: `${propertyId}`,
      receiver: owner,
    });
    setMessageSent("");
  };

  // get time of message sent
  const getTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString("en-NG", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return time;
  };

  //get date of the message sent either date, yesterday or today
  const getDateLabel = (dateStr: string) => {
    const date = parseISO(dateStr);

    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";

    return format(date, "MMM dd, yyyy"); // e.g. "Apr 08, 2025"
  };

  // group message by the date send so they can be rearranged for output
  const groupMessagesByDate = (messages: messagesType[]) => {
    return messages.reduce(
      (grouped: Record<string, messagesType[]>, msg: messagesType) => {
        const label = getDateLabel(msg.timestamp);
        if (!grouped[label]) grouped[label] = [];
        grouped[label].push(msg);
        return grouped;
      },
      {}
    );
  };

  // emoji function to add emoji to message
  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessageSent((prev) => {
      if (prev === undefined || !prev) return emojiData.emoji;
      return prev + emojiData.emoji;
    });
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // renaming the groupMessageByDate
  const grouped = groupMessagesByDate(messageReceived?.messages || []);

  return (
    <div className="relative">
      <div className="relative w- ">
        <div className="flex justify-between py-3 bg-gray-50 px-4 absolute w-auto left-0 rounded-md border-b-1 right-6 z-10  max-md:fixed max-md:right-0 max-md:top-[85px]">
          {/* <div className="flex justify-between py-3 bg-gray-50 px-4 fixed w-auto left-[48.6%] max-2xl:left-[54%] rounded-md border-b-1 right-6 z-10"> */}

          {/* Chat Details */}
          <div className="flex gap-4 items-center">
            <div className=" flex justify-center items-center ">
              <img
                src={Profile}
                loading="lazy"
                className="w-16 h-16 rounded-full max-lg:w-12 max-lg:h-12 max-md:w-10 max-md:h-10"
                alt="Profile Avatar"
              />
            </div>
            <div className="text-navy-blue">
              <p className="font-bold max-2xl:text-[.9em]">
                {firstTime === true
                  ? // if chatting for firstTime is true then show the owner of property full name cos tenant cant text tenant and owner cant text landlord
                    `${firstTimeDetail?.owner?.firstName} ${firstTimeDetail?.owner?.lastName}`
                  : ""}
                {firstTime === false
                  ? //if chatting for firstTime is false then check for the user role then output either the sender which is the tenant and receiver which  is either the agent or landlord
                    user?.userProfile?.role === "Tenant"
                    ? `${userInfo?.receiver?.firstName} ${userInfo?.receiver?.lastName}`
                    : `${userInfo?.sender?.firstName} ${userInfo?.sender?.lastName}`
                  : ""}
              </p>
              <p className="text-sm max-2xl:text-[.7em]">
                {/* if chatting for firstTime is true then show the owner of property role cos tenant cant text tenant and owner cant text landlord */}
                {firstTime === true && `${firstTimeDetail?.owner?.role}`}
                {firstTime === false
                  ? //if chatting for firstTime is false then check for the user role then output either the sender role which is the tenant and receiver which  is either the agent or landlord
                    user?.userProfile?.role === "Tenant"
                    ? `${userInfo?.receiver?.role}`
                    : `${userInfo?.sender?.role}`
                  : ""}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <NavLink
              // to={
              //   user?.userProfile?.role === "Tenant"
              //     ? `/profile/${userInfo?.receiver?._id}`
              //     : `/profile/${userInfo?.sender?._id}`
              // }
              to="/"
              className="bg-semi-navy-blue px-3 rounded-md py-2 text-white"
            >
              Veiw Profile
            </NavLink>
          </div>
        </div>
      </div>

      <div className="w-full bg-white relative   max-xl:h-auto flex flex-col pt-28 pb-20 max-md:pb-10">
        {/* <div className="w-full bg-white max-2xl:h-[700px]  max-xl:h-auto flex flex-col pt-28 pb-20 max-md:pb-10"> */}
        {cbMessage}
        {/* Displaying the image the tenant is referring to */}
        {propertyDetail?.images.length ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            // customButtonGroup={<CustomButtonGroup />}
            containerClass="carousel-container rounded-lg "
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            // dotListClass="custom-dot-list-style "
            // itemClass="carousel-item-padding-40-px"
          >
            {propertyDetail?.images?.map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9 mx-auto">
                {" "}
                <img
                  loading="lazy"
                  className="h-[350px] object-cover  object-center opacity-[.80]"
                  src={image.path}
                  alt="Single Property"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          ""
        )}

        {/* Outputting the message  */}
        <div className="flex-1 overflow-y-auto p-4 ">
          {Object.entries(grouped).map(([label, group]) => (
            <div key={label}>
              <div className="text-center text-sm text-gray-400 mb-2">
                — {label} —
              </div>
              {group?.map((msg: messagesType, index: number) => (
                <div
                  key={index}
                  className={`mb-2  ${
                    msg.senderId === user?.userProfile?._id
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block relative  max-w-[270px] px-3.5 pt-3 pb-5   rounded-lg ${
                      msg.senderId === user?.userProfile?._id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {msg.message}{" "}
                    <p className="absolute bottom-0 right-0 mb-1  mr-3 text-[.7em]">
                      {getTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* message input with send button */}

      <div className="fixed left-[26%] bottom-[0] max-md:fixed max-md:left-0 max-md:right-0 ma:bottom-0 max-md:bottom-[98px]  mt-20 right-0 bg-white p-4 border-t-">
        {/* <div className="fixed left-[30%] bottom-[-15px] max-md:fixed max-md:left-0 max-md:right-0 ma:bottom-0 max-md:bottom-[98px]  mt-20 left-0 right-0 bg-white p-4 border-t-"> */}
        <div className="flex gap-4 items-center relative">
          <input
            type="text"
            value={messageSent}
            placeholder="Type a message..."
            className="w-full border-1 py-2 rounded-md px-3"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              messageInput(e)
            }
          />
          <button
            className="text-3xl cursor-pointer relative"
            onClick={() => setShowPicker(!showPicker)}
          >
            <MdOutlineEmojiEmotions />
          </button>
          <div className="absolute top-[-480px]  right-[10px]">
            {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          </div>
          <button
            onClick={sendMessage}
            onKeyDown={sendMessage}
            type="submit"
            className="bg-blue-500 flex items-center gap-3 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            <span>
              <IoSend />
            </span>

            <p>Send</p>
          </button>
        </div>
      </div>

      <audio ref={audioRef} className="hidden" src={Notification_Sound}></audio>
    </div>
  );
};

export default Chat;
