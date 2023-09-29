import express from "express";
import { createDoctor, getDoctor, getAllDoctors, updateDoctor, deleteDoctor } from "../controllers/doctorController.js";

const router = express.Router();

router.post("/doctors", createDoctor);
router.get("/doctors/:id", getDoctor);
router.get("/doctors", getAllDoctors);
router.put("/doctors/:id", updateDoctor);
router.delete("/doctors/:id", deleteDoctor);

export default router;