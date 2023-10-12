import { nanoid } from "nanoid";
import Booking from "../models/Booking.js";
import Patient from "../models/Patient.js";

export const createBooking = async (req, res) => {
  try {
    // asosiasi booking dan patient
    const { id_patient } = req.body;
    const patient = await Patient.findOne({ where: {id: id_patient}});
    if (!patient) {
      return res.status(404).json({ error: "Patient not found on DB" });
    }

    const id = nanoid(5);
    await Booking.create({ req.body });
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
      const formattedJson = JSON.stringify(booking, null, 2);
      // Send data in the desired JSON format
      const htmlResponse = `
      <html>
      <head>
        <style>
          body {
            background-color: black;
            color: white;
          }
        </style>
      </head>
      <body>
        <pre>${formattedJson}</pre>
      </body>
    </html>`;
  
      res.status(200).send(htmlResponse);      
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

export const getAllBookings = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    // Convert data to the desired format
    const formattedBookings = booking.map((booking) => {
      return {
        id: booking.id,
        first_name: booking.first_name,
        last_name: booking.last_name,
        email: booking.email,
        date: booking.date,
        select: booking.select,
        message: booking.message,
        id_patient: booking.id_patient,
      };
    });

    // Convert data to the desired JSON format
    const formattedJson = JSON.stringify(formattedBookings, null, 2);

    // Send data in the desired JSON format
    const htmlResponse = `
    <html>
    <head>
      <style>
        body {
          background-color: black;
          color: white;
        }
      </style>
    </head>
    <body>
      <pre>${formattedJson}</pre>
    </body>
  </html>`;

    res.status(200).send(htmlResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, date, select, message } = req.body;
    const booking = await Booking.findOne({ where: {id: id }});
    
    if (!booking) {
      return res.status(404).json({ error: "Booking not found on DB" });
    }
    // validation id_patient
    const { id_patient } = req.body;
    const patient = await Patient.findOne({ where: {id: id_patient}});
    if (!patient) {
      return res.status(404).json({ error: "Patient not found on DB" });
    }

    // Update data
    booking.first_name = first_name;
    booking.last_name = last_name;
    booking.email = email;
    booking.date = date;
    booking.select = select;
    booking.message = message;
    booking.id_patient = id_patient;

    // save data
    await booking.save();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
   }
}

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findOne({ where: {id: id }});
    
    if (!booking) {
      return res.status(404).json({ error: "Booking not found on DB" });
    }

    // delete data
    await booking.destroy();
    res.status(200).json({ message: "Booking berhasil dihapus"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}