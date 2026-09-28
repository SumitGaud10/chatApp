import { auth } from "../auth.js";
import { fromNodeHeaders } from "better-auth/node";

const authMiddleware = async (req, res, next) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    res.status(401).json({
      message: "User not authenticated",
    });
  }

  req.user = session.user;
  next();
};

export default authMiddleware;
