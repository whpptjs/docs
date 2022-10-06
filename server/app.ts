import express, { NextFunction } from "express";
import { Whppt, WhpptConfig } from "@whppt/api-express";

const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const options: WhpptConfig = {
  security: {
    provider: "jwt",
    jwt: {
      issuer: process.env.JWT_ISSUER || "unkown",
    },
  },
};

app.use(Whppt(options));

app.use(function (_: any, __: any, next: NextFunction) {
  console.log("----- Route not found -----");
  next(createError(404));
});

app.use(function (err: any, req: any, res: any) {
  console.log("----- Route error -----");
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.send("unknown api error");
});

export default app;
