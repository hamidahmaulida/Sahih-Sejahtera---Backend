import { nanoid } from "nanoid";
import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";
import Nurse from "../models/nurse.js";

export const createPatient = async (req, res) => {
  try {
    // asosiasi patient dan doctor
    const { id_doctor } = req.body;
    const doctor = await Doctor.findOne({ where: {id: id_doctor}});
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found on DB" });
    }
    // asosiasi patient dan nurse
    const { id_nurse } = req.body;
    const nurse = await Nurse.findOne({ where: {id: id_nurse}});
    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found on DB" });
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
    const formattedJson = JSON.stringify(patient, null, 2);
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

export const getAllPatients = async (req, res) => {
  try {
    const patient = await Patient.findAll();
      // Convert data to the desired format
      const formattedPatients = patient.map((patient) => {
        return {
          id: patient.id,
          full_name: patient.full_name,
          born_date: patient.born_date,
          gender: patient.gender,
          age: patient.age,
          phone_num: patient.phone_num,
          id_doctor: patient.id_doctor,
          id_nurse: patient.id_nurse, 
        };
      });

      // Convert data to the desired JSON format
      const formattedJson = JSON.stringify(formattedPatients, null, 2);

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

    // validation id_doctor
    const { id_doctor } = req.body;
    const doctor = await Doctor.findOne({ where: {id: id_doctor}});
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found on DB" });
    }

    // validation id_nurse
    const { id_nurse } = req.body;
    const nurse = await Nurse.findOne({ where: {id: id_nurse}});
    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found on DB" });
    }

    // update data
    patient.full_name = full_name;
    patient.born_date = born_date;
    patient.gender = gender;
    patient.age = age;
    patient.phone_num = phone_num;
    patient.id_doctor = id_doctor;

    // save data
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