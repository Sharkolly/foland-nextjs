/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from "react-router-dom";
import { useQueryChatUsers } from "../Hooks/useQuery";
import Chat from "./[ID]/Chat";
import { useEffect, useState } from "react";
import { useContextStore } from "../Store/Context";
import Profile from "../Images/Profile_avatar_placeholder_large.png";
import { usersType } from "../Types/user.types";

const Chats = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const { data, error, isLoading } = useQueryChatUsers("/chat");

  const [users, setUsers] = useState<usersType[] | null>(null);
  const { user } = useContextStore();
  const [userChatRole, setUserChatRole] = useState<string>("");

  useEffect(() => {
    if (typeof data == "string") {
      return;
    }

    setUsers(data);
    console.log(data);
  }, [data]);

  return (
    <div>
      <div className="flex relative justify-between w-[100%] ">
        <div className="absolute w-[29%] max-2xl:w-[35%] max-xl:w-[38%]  z-[30] h-[640px] overflow-auto  rounded-md  py-3 chat-static border-semi-navy-blue border-r-2">
          {/* <div className="fixed w-[22%] max-2xl:w-[28%]  z-[30] h-[640px] overflow-auto bg-[#faf9f6] rounded-md max-lg:w-full py-3 max-lg:static"> */}
          <div className="relative  ">
            {/* <div className="sticky  bg-[#faf9f6] z-[50] left-[26.3%]  px-4 right-[53%] max-2xl:left-[27%]  max-2xl:right-[46%] "> */}
            <div className="sticky  z-[50] left-[0%]  px-4 right-[0%] max-2xl:left-[0%]  max-2xl:right-[0%]  ">
              {/* <div className="sticky bg-[#faf9f6] z-[50] left-[0%]  px-4 right-[0%] max-2xl:left-[0%]  max-2xl:right-[0%] "> */}
              <div className=" py-3 z-[50]">
                <h1 className="font-bold text-2xl mb-3"> Chats</h1>
              </div>
              <div className="mb-4">
                <input
                  placeholder="Search Chats"
                  type="search"
                  className="w-full border-2 py-2 mt-1 rounded-md px-3"
                />
              </div>
            </div>
            <div className=" z-[0] h-[] overflow-y-auto gap-3 flex flex-col">
              {!users
                ? <p className="text-[1em] justify-center h-[50vh] flex items-center">No Chats History</p>
                : users?.map((userChat: usersType, index: number) => {
                    return (
                      <NavLink
                        to={`/chats/${userChat?.roomId}`}
                        key={index}
                        className="flex items-center px-2 rounded-md hover:bg-slate-200 justify-between"
                      >
                        <div className="flex gap-3 items-center  cursor-pointer py-2 ">
                          {/* <img src="" alt="" />
                           */}
                          <div className=" flex justify-center items-center ">
                            <img
                              src={Profile}
                              loading="lazy"
                              className="w-10 h-10 rounded-full"
                              alt="Profile Avatar"
                            />
                          </div>
                          <div className="text-navy-blue ">
                            <p className="font-bold max-2xl:text-[.9em]">
                              {user?.userProfile?.role === "Tenant"
                                ? // if tenant show the owner name | show the tenant name if agent or landlord
                                  `${userChat.receiver.firstName}  ${userChat.receiver.lastName}`
                                : `${userChat.sender.firstName}  ${userChat.sender.lastName}`}
                            </p>
                            <p className="text-sm max-2xl:text-[.7em]">
                              {/* if tenant show the owner role | show the tenant role if agent or landlord */}
                              {user?.userProfile?.role === "Tenant"
                                ? userChat.receiver.role
                                : userChat.sender.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1 items-end text-right text-[.7em]">
                          <p>Yesterday</p>
                          <p className="bg-navy-blue text-white flex justify-center items-center w-5 h-5 rounded-full">
                            2
                          </p>
                        </div>
                      </NavLink>
                    );
                  })}
            </div>
          </div>
        </div>

        <div className="h-[85vh] overflow-y-auto w-[70%] max-2xl:w-[65%] max-[1100px]:hidden relative ml-[30%] max-2xl:ml-[37%]">
          {selectedUserId ? (
            <>
              <Chat />
            </>
          ) : (
            <div className="flex-1 flex items-center h-[75vh] justify-center text-gray-400">
              Select a user to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chats;

// function ChatLayout() {

//   return (
//     <div className="flex h-screen w-full">
//       {/* Sidebar */}
//       <div className="w-1/3 bg-gray-900 text-white flex flex-col">
//         <div className="p-4 text-xl font-bold border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
//           Chats
//         </div>
//         <div className="p-2 border-b border-gray-700 sticky top-12 bg-gray-900 z-10">
//           <input
//             type="text"
//             placeholder="Search chats"
//             className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
//           />
//         </div>
//         <div className="flex-1 overflow-y-auto">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               className={`p-4 cursor-pointer hover:bg-gray-800 border-b border-gray-700 ${
//                 selectedUserId === user.id ? "bg-gray-800" : ""
//               }`}
//               onClick={() => setSelectedUserId(user.id)}
//             >
//               {user.name}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Window */}
//       <div className="w-2/3 bg-white h-full flex flex-col">
//         {selectedUserId ? (
//           <div className="flex-1 overflow-y-auto p-4">
//             {messages[selectedUserId].map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 ${
//                   msg.from === "You" ? "text-right" : "text-left"
//                 }`}
//               >
//                 <div
//                   className={`inline-block px-4 py-2 rounded-lg ${
//                     msg.from === "You"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex-1 flex items-center justify-center text-gray-400">
//             Select a user to start chatting
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
