import express from "express";
import { createPatient } from "../controllers/PatientControllers.js";

const router = express.Router();

router.post("/patients", createPatient);

export default router;