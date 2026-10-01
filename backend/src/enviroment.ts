import dotenv from "dotenv";

dotenv.config();

const requiredEnv = (name: string) => {
  const variable = process.env[name];

  if (!variable) {
    console.log(`[Environment error] variable ${name} not defined`);
    process.exit(1);
  }

  return variable;
};

const environment = {
  mongodbUri: requiredEnv("MONGODB_URI"),
  frontend: requiredEnv("FRONTEND_URL"),
  port: requiredEnv("PORT"),
} as const;
export default environment;
