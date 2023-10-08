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
router.get("/getBooking/:id", getBooking);
router.get("/getAllBookings", getAllBookings);
router.put("/updateBookings/:id", updateBookings);
router.delete("/deleteBooking/:id", deleteBooking);

export default router;
