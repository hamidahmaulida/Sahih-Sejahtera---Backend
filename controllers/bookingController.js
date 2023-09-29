import { nanoid } from "nanoid";
import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const id = nanoid(5);
    await Booking.create({ ...req.body, id: id });
    res.status(201).json({
      msg: "Booking Created",
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getBooking = async (req, res) => {
    try {
      const { id } = req.params;
      const booking = await Booking.findOne({ where: {id: id }});
      if (!booking) {
        return res.status(404).json({ error: "Booking not found on DB" });
      }
      res.status(200).json(booking)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

export const getAllBookings = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
