import { User, Session } from "better-auth";

declare global {
  namespace Express {
    interface Request {
      session: Session;
      user: User;
    }
  }
}

export {};
