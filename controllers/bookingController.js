import { nanoid } from "nanoid";
import Booking from "../models/Booking.js";
import Patient from "../models/Patient.js";

export const createBooking = async (req, res) => {
  try {
    // asosiasi patient dan booking
    const { id_patient } = req.body;
    const patient = await Patient.findAll({ where: {id: id_patient}});
    if (!patient) {
      return res.status(404).json({ error: "Patient not found on DB" });
    }

    const id = nanoid(5);
    await Booking.create({ ...req.body, id: id });
    res.status(201).json({
      msg: "Booking Created",
    });
  } catch (error) {
    res.send(error.message);
  }
};

    // validasi id_patient
    const { id_patient } = req.body;
    const patient = await Patient.findOne({ where: {id: id_patient}});
    if (!patient) {
      return res.status(404).json({ error: "Patient not found on DB" });
    } 

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
