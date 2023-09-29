import { DataTypes } from "sequelize";
import db from '../config/database.js';
import Doctor from "./Doctor.js";

const Patient = db.define("patient", {
    id: {
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
        type: DataTypes.STRING,
    },
    id_doctor: {
        type: DataTypes.STRING,
    }
});

Patient.belongsTo(Doctor, { foreignKey: 'id_doctor' });

export default Patient;

// If table "Patient" doesn't exist, this function creates it
(async () => {
  await db.sync();
})();