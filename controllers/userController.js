// controllers/userController.js
import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Gagal membuat pengguna' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Pengguna tidak ditemukan' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Kata sandi salah' });
    }

    // Di sini, Anda dapat menghasilkan token JWT atau sesi lainnya
    res.status(200).json({ message: 'Berhasil login' });
  } catch (error) {
    res.status(400).json({ message: 'Gagal login' });
  }
};
