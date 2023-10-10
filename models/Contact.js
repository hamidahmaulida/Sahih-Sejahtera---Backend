import { DataTypes, Sequelize } from "sequelize";
import db from '../config/database.js';

const Contact = db.define("contact", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.STRING,
    }
});

export default Contact;