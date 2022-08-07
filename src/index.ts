import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import test from "./test/test";

const app = express();

app.use("/test", test);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to in my server!");
});

app.listen(process.env.PORT, () => {
  console.log(`
    server-running
`);
});
