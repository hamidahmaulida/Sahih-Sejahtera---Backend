import express from "express";
import { createNurse, getNurse, getAllNurses, updateNurse, deleteNurse } from "../controllers/nurseController.js";

const router = express.Router();

router.post("/nurses", createNurse);
router.get("/nurses/:id", getNurse);
router.get("/nurses", getAllNurses);
router.put("/nurses/:id", updateNurse);
router.delete("/nurses/:id", deleteNurse);

export default router;