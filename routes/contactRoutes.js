// routes/contactRoutes.js
import express from "express";
import { createContact, getContact, getAllContacts, updateContact, deleteContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contacts", createContact);
router.get("/contacts/:id", getContact);
router.get("/contacts", getAllContacts);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

export default router;