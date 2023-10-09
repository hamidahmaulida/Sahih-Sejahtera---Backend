import { nanoid } from "nanoid";
import Doctor from "../models/Doctor.js";

export const createDoctor = async (req, res) => {
  try {
    const id = nanoid(5);
    await Doctor.create({ ...req.body, id: id });
    res.status(201).json({
      msg: "Doctor created",
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findOne({ where: {id: id }});
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found on DB" });
    }
    const formattedJson = JSON.stringify(doctor, null, 2);
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

export const getAllDoctors = async (req, res) => {
  try {
    const doctor = await Doctor.findAll();
    // Convert data to the desired format
    const formattedDoctors = doctor.map((doctor) => {
      return {
        id: doctor.id,
        name: doctor.name,
        born_date: doctor.born_date,
        gender: doctor.gender,
        address: doctor.address,
        phone_num: doctor.phone_num,
        specialist: doctor.specialist,
        schedule: doctor.schedule, 
      };
    });

    // Convert data to the desired JSON format
    const formattedJson = JSON.stringify(formattedDoctors, null, 2);

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
}

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, born_date, gender, address, phone_num, specialist, schedule } = req.body;
    const doctor = await Doctor.findOne({ where: {id: id }});
    
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found on DB" });
    }

    // Update data
    doctor.name = name;
    doctor.born_date = born_date;
    doctor.gender = gender;
    doctor.address = address;
    doctor.phone_num = phone_num;
    doctor.specialist = specialist;
    doctor.schedule = schedule;

    // simpan data
    await doctor.save();
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findOne({ where: {id: id }});
    
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found on DB" });
    }

    // delete data
    await doctor.destroy();
    res.status(200).json({ message: "Doctor berhasil dihapus"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}