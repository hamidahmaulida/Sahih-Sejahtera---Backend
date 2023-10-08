import express from "express";
import { createContact, getContact, getAllContacts, updateContact, deleteContact } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contacts", createContact);
router.get("/getContact/:id", getContact);
router.get("/getAllContacts", getAllContacts);
router.put("/updateContact/:id", updateContact);
router.delete("/deleteContact/:id", deleteContact);

export default router;