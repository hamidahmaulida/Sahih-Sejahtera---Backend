import { nanoid } from "nanoid";
import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";

export const createPatient = async (req, res) => {
  try {
    const { id_doctor } = req.body;
    const doctor = await Doctor.findOne({ where: {id: id_doctor}});
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found on DB" });
    }
    const id = nanoid(5);
    await Patient.create({ ...req.body, id: id });
    res.status(201).json({
      msg: "Patient created",
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findOne({ where: {id: id }});
    if (!patient) {
      return res.status(404).json({ error: "Patient not found on DB" });
    }
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updatePatients = async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, born_date, gender, age, phone_num } = req.body;
    const patient = await Patient.findOne({ where: {id: id }});
    
    if (!patient) {
      return res.status(404).json({ error: "Patient not found on DB" });
    }

    // validasi id dokter
    const { id_doctor } = req.body;
    const doctor = await Doctor.findOne({ where: {id: id_doctor}});
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found on DB" });
    }

    // Update data
    patient.full_name = full_name;
    patient.born_date = born_date;
    patient.gender = gender;
    patient.age = age;
    patient.phone_num = phone_num;
    patient.id_doctor = id_doctor;

    // simpan data
    await patient.save();
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findOne({ where: {id: id }});
    
    if (!patient) {
      return res.status(404).json({ error: "Patient not found on DB" });
    }

    // delete data
    await patient.destroy();
    res.status(200).json({ message: "Pasien berhasil dihapus"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}