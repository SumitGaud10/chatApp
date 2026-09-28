import express from "express";
import dbConnect from "./dbConnect.js";
import { auth } from "./auth.js";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import environment from "./enviroment.js";
import authMiddleware from "./middlware/authMiddleware.js";

const app = express();

dbConnect();

app.use(
  cors({
    origin: environment.frontend,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.get("/", authMiddleware, (req, res) => {
  res.send(req.user.name);
});

app.listen(3000, () =>
  console.log(
    `[Start-Up] Server has been start successfully at port ${environment.port}`,
  ),
);
