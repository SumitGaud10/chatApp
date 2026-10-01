import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  title: { type: String },
  isGroup: { type: Boolean, default: false },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
