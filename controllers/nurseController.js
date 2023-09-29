import { nanoid } from "nanoid";
import Doctor from "../models/Doctor.js";
import Nurse from "../models/nurse.js";

export const createNurse = async (req, res) => {
  try {
    const id = nanoid(5);
    await Nurse.create({ ...req.body, id: id });
    res.status(201).json({
      msg: "Nurse created",
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const nurse = await Nurse.findOne({ where: { id: id } });
    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found on DB" });
    }
    res.status(200).json(nurse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllNurses = async (req, res) => {
  try {
    const nurse = await Nurse.findAll();
    res.status(200).json(nurse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      born_date,
      gender,
      address,
      phone_num,
      specialist,
      schedule,
    } = req.body;
    const nurse = await Nurse.findOne({ where: { id: id } });

    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found on DB" });
    }

    // Update data
    nurse.name = name;
    nurse.born_date = born_date;
    nurse.gender = gender;
    nurse.address = address;
    nurse.phone_num = phone_num;
    nurse.specialist = specialist;
    nurse.schedule = schedule;

    // simpan data
    await nurse.save();
    res.status(200).json(nurse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNurse = async (req, res) => {
  try {
    const { id } = req.params;
    const nurse = await Nurse.findOne({ where: { id: id } });

    if (!nurse) {
      return res.status(404).json({ error: "Nurse not found on DB" });
    }

    // delete data
    await nurse.destroy();
    res.status(200).json({ message: "Nurse berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
