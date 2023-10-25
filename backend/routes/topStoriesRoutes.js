import express from "express";
import {getTopStories} from "../controllers/nyTimesController.js";

const router = express.Router();

router.get('/top-stories', getTopStories);

export default router;