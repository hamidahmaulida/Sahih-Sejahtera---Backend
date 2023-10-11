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
import db from "./config/database.js";

const app = express(); // call function express.js
const PORT = process.env.PORT || 3000;

app.use(express.json());
const origin = 'https://kampus-merdeka-software-engineering.github.io/FE-Semarang-26';

app.use(cors({
  origin,
  methods: 'GET, PUT, POST, DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
  allowedHeaders: 'Content-Type',
}));

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
db.sync({ alter: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(`Database connection failed: ${error}`);
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
