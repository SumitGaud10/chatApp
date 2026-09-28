import Chat from "../model/chat.js";

const accessChat = async (req, res) => {
  const { userId } = req.body;
  const me = req.user.id;

  const existingChat = await Chat.find({
    isGroup: false,
    $and: [
      { members: { $elemMatch: me } },
      { members: { $elemMatch: userId } },
    ],
  }).populate("members");

  if (existingChat) res.status(200).send(existingChat);

  const newChat = new Chat({ isGroup: false, members: [userId, me] });
  await newChat.save();

  res.status(200).send(newChat);
};
