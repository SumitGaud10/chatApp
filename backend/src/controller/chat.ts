import { RequestHandler } from "express";
import Chat from "../model/chat.js";
import mongoose from "mongoose";
import { asyncHandler } from "../utils/asynchandler.js";

export const accessChat: RequestHandler = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const me = req.user.id;

  const existingChat = await Chat.find({
    isGroup: false,
    $and: [{ members: me }, { members: userId }],
  }).populate("members");

  if (existingChat) return res.status(200).send(existingChat);

  const newChat = new Chat({ isGroup: false, members: [userId, me] });
  await newChat.save();

  return res.status(200).send(newChat);
});

export const getChat: RequestHandler = asyncHandler(async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.user.id);
  const chats = await Chat.find({ members: userId });

  res.status(200).send(chats);
});
