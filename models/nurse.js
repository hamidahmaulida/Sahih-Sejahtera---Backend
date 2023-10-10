import { DataTypes } from "sequelize";
import db from '../config/database.js';

const Nurse = db.define("nurse", {
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


export default Nurse;