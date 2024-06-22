const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const userRoutes = require("./src/infrastructure/web/routes/userRoutes");
const eventEmiter = require("./src/infrastructure/events/eventEmitter");
const connectDB = require("./src/config/db");

dotenv.config();

const app = express();

if (!process.env.DATABASE || !process.env.JWT_SECRET) {
  console.error("FATAL ERROR: DATABASE or JWT_SECRET is not defined.");
  process.exit(1); // Exit process with failure
}

// db connection
connectDB();
//middleware
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

// mongoose
//   .connect("", {})
//   .then(() => {
//     console.log("dbConnected");
//   })
//   .catch(err => {
//     console.log("Db connection error:", err);
//   });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running");
});

//Event handling setup

require("./src/infrastructure/events/userEvents")(eventEmiter);
