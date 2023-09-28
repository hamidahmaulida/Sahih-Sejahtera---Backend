import Patient from "../models/patientmodel.js";

export const createPatient = async (req, res) => {
  try {
    await Patient.create(req.body);
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
    const patient = await Patient.findOne({ _id: id });
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