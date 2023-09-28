import "dotenv/config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
    dialect: "mysql",
});

db.authenticate()
    .then(() => console.log("Database connect successfully"))
    .catch(error => {
        console.log(`Database connection failed: ${error}`);
    });

export default db;

