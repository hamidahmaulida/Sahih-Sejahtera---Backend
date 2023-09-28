import "dotenv/config";
import express from "express";
import PatientRoute from "./routes/patientroutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// ROUTES
app.use(PatientRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});