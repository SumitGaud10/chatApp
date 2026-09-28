import dotenv from "dotenv";

dotenv.config();

const environment = {
  mongodbUri: process.env.MONGODB_URI,
  frontend: process.env.FRONTEND_URL,
  port: process.env.PORT,
};

export default environment;
