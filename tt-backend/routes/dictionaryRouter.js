import { Router } from "express";
import dictionaryController from "../controllers/dictionaryController.js";

const dictionaryRouter = Router();

// “/api/dict/search?word=...”
dictionaryRouter.get("/search", dictionaryController.search);

export default dictionaryRouter;
