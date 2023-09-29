import { DataTypes } from "sequelize";
import db from '../config/database.js';

const Booking = db.define("booking", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    fullname: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    tanggal_booking: {
        type: DataTypes.DATE,
    },
    deskripsi_booking: {
        type: DataTypes.STRING,
    },
});

export default Booking;

// If table "Booking" doesn't exist, this function creates it
(async () => {
    await db.sync();
})();