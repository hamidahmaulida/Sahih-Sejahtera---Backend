// import library express.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import PatientRoute from "./routes/patientroutes.js"; //1
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import nurseRoutes from "./routes/nurseRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express(); // call function express.js
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// create logger middleware function
function LoggerMiddleware(req, res, next) {
  console.log(`Request received at: ${new Date()}`);
  next(); // continue process next function
}

app.use(LoggerMiddleware);

// ROUTES
app.get("/", (req, res) => {
  res.send("Selamat Datang di SahihSejahtera - Dental Booking App");
});

// middleware
app.use(PatientRoute);
app.use(authRoutes);
app.use(doctorRoutes);
app.use(nurseRoutes);
app.use(bookingRoutes);
app.use(contactRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
