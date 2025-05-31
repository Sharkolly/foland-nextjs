import { userInfo } from "./user.types";

export type messagesType = {
  senderId: string;
  message: string;
  _id: string;
  timestamp: string;
  senderEmail: string;
};
export type messageType = {
  _id: string;
  roomId: string;
  propertyId: string;
  sender: string;
  receiver: string;
  receiverName: string;
  messages: messagesType[];
};

export type EmojiClickData = {
    emoji: string;
    names: string[];
    unified: string;
  };

  export type firstTimeType = {
    _id: string;
    owner: userInfo;
  };