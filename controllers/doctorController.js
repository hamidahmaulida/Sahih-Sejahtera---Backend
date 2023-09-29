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
    res.status(200).json(doctor)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllDoctors = async (req, res) => {
  try {
    const doctor = await Doctor.findAll();
    res.status(200).json(doctor)
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