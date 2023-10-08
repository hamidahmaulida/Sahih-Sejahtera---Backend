import { DataTypes } from "sequelize";
import db from '../config/database.js';
import Patient from "./Patient.js";

const Booking = db.define("booking", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
    },
    input: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
    },
    id_patient: {
        type: DataTypes.STRING,
    }
});
Patient.hasMany(Booking, { foreignKey: 'id_patient' });
export default Booking;

// If table "Booking" doesn't exist, this function creates it
(async () => {
    await db.sync();
})();