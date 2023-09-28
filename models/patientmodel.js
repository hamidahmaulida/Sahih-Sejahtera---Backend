import { DataTypes } from "sequelize";
import db from '../config/database.js';

const Patient = db.define("patient", {
    id_patient: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    full_name: {
        type: DataTypes.STRING,
    },
    born_date: {
        type: DataTypes.DATE,
    },
    gender: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    phone_num: {
        type: DataTypes.INTEGER,
    },
});

export default Patient;

// If table "Patient" doesn't exist, this function creates it
(async () => {
  await db.sync();
})();