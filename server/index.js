require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const { Blocks } = require("./routes");

const colorize = require("chalk");
const log = console.log;

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      status: "OK - Landing Page",
    });
  } catch (err) {
    res.status(400).json({
      status: "FAIL - ...",
    });
  }
});

app.use("/blocks",require("./routes/blocks"));

app.listen(PORT, () => {
  log(
    colorize
      .bgRgb(40, 200, 255)
      .rgb(0, 0, 0)
      .bold(`Server is running on port ${PORT}!`)
  );
});

//Test DB connection
// db.authenticate()
//   .then(
//     console.log("Connection to PostgreSQL has been established successfully.")
//   )
//   .catch((error) =>
//     console.error("Unable to connect to the PostgreSQL database:", error)
//   );
