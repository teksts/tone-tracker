import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import getLogger from "./logger.js";
import apiRouter from "./routes/apiRouter.js"

dotenv.config();

const { PORT } = process.env;
const logger = getLogger("server");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

const server = app.listen(PORT, () => {
  logger.log(`Listening on port ${PORT}`);
});