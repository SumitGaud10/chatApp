import express from "express"
import dbConnect from "./dbConnect";
import { auth } from "./auth";

const app = express();

dbConnect();

app.all("/api/auth/*", toNodeHandler(auth));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(3000,()=>console.log("Server running at 3000"))