import "dotenv/config";

// import library express.js
import express from "express";
import PatientRoute from "./routes/patientroutes.js"; //1
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import nurseRoutes from "./routes/nurseRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express(); // call function express.js
const PORT = process.env.PORT || 5000;

app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Selamat Datang di SahihSejahtera - Dental Booking App");
});

app.use(PatientRoute);
app.use(authRoutes);
app.use(doctorRoutes);
app.use(nurseRoutes);
app.use(bookingRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
