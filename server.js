const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = express();

//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

//Route files
const hotels = require("./routes/hotels");
const auth = require("./routes/auth");
const reservations = require("./routes/reservations");

//Mount routers
app.use("/api/v1/hotels", hotels);
app.use("/api/v1/auth", auth);
app.use("/api/v1/reservations", reservations);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello from express</h1>");
//   // res.send({name:'Brad'});
//   // res.json({name:'Brad'});
//   // res.sendStatus(400);
//   // res.status(400).json({success:false});
//   // res.status(200).json({ success: true, data: { id: 1 } });
// });

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    "Server running in ",
    process.env.NODE_ENV,
    " mode on port ",
    PORT
  )
);

// Handle unhandle promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & Exit process
  server.close(() => process.exit(1));
});
