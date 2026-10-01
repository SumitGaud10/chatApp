import Chat from "../model/chat";
import { asyncHandler } from "../utils/asynchandler";

export const createGroup = asyncHandler(async (req, res) => {
  const { groupName, groupMembers, groupAdmin } = req.body;

  const newGroup = new Chat({
    title: groupName,
    isGroup: true,
    members: groupMembers,
    groupAdmin,
  });

  res.status(200).json({
    success: true,
    message: "Group has been created",
    data: newGroup,
  });
});
