import { DataTypes, Sequelize } from "sequelize";
import db from '../config/database.js';

const Doctor = db.define("doctor", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    born_date: {
        type: DataTypes.DATE,
    },
    gender: {
        type: DataTypes.ENUM("Laki-laki","Perempuan"),
    },
    address: {
        type: DataTypes.STRING,
    },
    phone_num: {
        type: DataTypes.STRING,
    },
    specialist: {
        type: DataTypes.STRING,
    },
    schedule: {
        type: DataTypes.STRING,
    }
});

export default Doctor;

// If table "Doctor" doesn't exist, this function creates it
(async () => {
  await db.sync();
})();