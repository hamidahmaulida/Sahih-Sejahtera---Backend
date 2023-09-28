import express from "express";
import { createPatient, getPatient, getAllPatients } from "../controllers/PatientControllers.js";

const router = express.Router();

router.post("/patients", createPatient);
router.get("/patients/:id", getPatient);
router.get("/patients", getAllPatients);

export default router;