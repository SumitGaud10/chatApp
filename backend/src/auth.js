import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { dbclient } from "./dbConnect";

export const auth = betterAuth({
  database:mongodbAdapter(dbclient.db,{dbclient}),
  advanced:{database:{joins:true}}
});