import express from "express";
import {
  createBooking,
  getBooking,
  getAllBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/booking", createBooking);
router.get("/getBooking/:id", getBooking);
router.get("/getAllBookings", getAllBookings);

export default router;
