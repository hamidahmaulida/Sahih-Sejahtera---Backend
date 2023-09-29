import express from "express";
import { createPatient, getPatient, getAllPatients, updatePatients, deletePatient } from "../controllers/PatientControllers.js";

const router = express.Router();

router.post("/patients", createPatient);
router.get("/patients/:id", getPatient);
router.get("/patients", getAllPatients);
router.put("/patients/:id", updatePatients);
router.delete("/patients/:id", deletePatient);

export default router;