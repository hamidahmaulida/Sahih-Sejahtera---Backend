import express from "express";
import {
  createBooking,
  getBooking,
  getAllBookings,
  updateBookings,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings/:id", getBooking);
router.get("/bookings", getAllBookings);
router.put("/bookings/:id", updateBookings);
router.delete("/bookings/:id", deleteBooking);

export default router;
