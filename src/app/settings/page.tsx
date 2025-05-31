'use client'
import PaystackPop from "@paystack/inline-js";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

type paystackTy = {
  reference: string; // Unique payment reference
  trans?: string; // Transaction ID (optional)
  status: "success"; // Always "success" for this callback
  message: string; // Status message (e.g., "Approved")
  transaction: string; // Same as `trans`
};

type EmojiClickData = {
  emoji: string;             // The actual emoji character, e.g. "😂"
  names: string[];           // List of shortcodes/names e.g. ["face with tears of joy"]
  unified: string;           // Unicode string e.g. "1f602"
};
const Settings = () => {
  // const paystackInstance = new PaystackPop();
  // const onSuccess = (transaction) =>
  //   alert(`Succesful! Ref: ${transaction.reference}`);
  // paystackInstance.newTransaction({
  //   key: "pk_test_TYooMQauvdEDq54NiTphI7jx",
  //   email: "demo@paystack.com",
  //   amount: 10000,
  //   onSuccess,
  // });

  const [showPicker, setShowPicker] = useState(false);
  const [text, setText] = useState("");


  const handleEmojiClick = (emojiData:EmojiClickData) => {
    setText(prev => prev + emojiData.emoji);
  };


  const pay = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      // key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      key: 'mdkjnjkldsnwdnln',
      email: "sharkollymofeoluwa@gmail.com",
      amount: 2000000, // in kobo
      onSuccess: (transaction: paystackTy) => {
        console.log(transaction);
      },
      onCancel: () => {
        console.log("Transaction was cancelled");
      },
    });
  };
  return (
    <div>
      Settings
      <button onClick={pay} className="bg-blue-600 text-white p-3 rounded-lg">
        Pay ₦2,000 to Post Property
      </button>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        cols={50}
      />
      <button onClick={() => setShowPicker(!showPicker)}>
        {showPicker ? "Close" : "Add Emoji"}
      </button>
      {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </div>
  );
};

export default Settings;
