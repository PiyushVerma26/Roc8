import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDb from "./DB_Connection/index.js";
import userRouter from "./src/routes/user_routes.js";
import dataRouter from "./src/routes/data_routes.js";
import path from "path";
import { fileURLToPath } from "url";

const envPath =
  process.env.NODE_ENV === "production" ? "./.env.production" : "./.env";

dotenv.config({ path: envPath });
const app = express();
connectDb();
app.use(bodyParser.json());
app.use(cookieParser());
const corsConfig = {
  origin: ["http://localhost:5173", "http://localhost:4173"],
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};
app.use(cors(corsConfig));

app.use("/api/auth", userRouter);
app.use("/api", dataRouter);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

// Running the Server
const PORT = process.env._PORT || 4000;
app.listen(PORT, () => {
  const styles = `
    \x1b[48;5;32m\x1b[37m\x1b[1m Server is Connected on PORT ${PORT} \x1b[0m
  `;
  console.log(styles);
});
