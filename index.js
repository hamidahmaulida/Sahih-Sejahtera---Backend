import "dotenv/config";

// import library express.js
import express from "express";
import PatientRoute from "./routes/patientroutes.js";

const app = express(); // call function express.js
const PORT = process.env.PORT || 5000;

app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Selamat Datang di SahihSejahtera - Dental Booking App");
});

app.use(PatientRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
