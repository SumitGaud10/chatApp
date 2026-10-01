import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { dbclient } from "./dbConnect.js";
import environment from "./enviroment.js";

export const auth = betterAuth({
  database: mongodbAdapter(dbclient.db(), { client: dbclient }),
  advanced: { database: { joins: true } },
  trustedOrigins: async () => {
    return [environment.frontend];
  },
  emailAndPassword: { enabled: true },
});
