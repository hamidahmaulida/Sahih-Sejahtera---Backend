// models/user.js
import { DataTypes } from "sequelize";
import db from '../config/database.js';

const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
