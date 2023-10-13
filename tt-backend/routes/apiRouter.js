import { Router } from "express";
import dictionaryRouter from "./dictionaryRouter.js";

const apiRouter = Router();

apiRouter.use("/dict", dictionaryRouter);

export default apiRouter;

