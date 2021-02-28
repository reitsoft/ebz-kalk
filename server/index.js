require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Blocks, Components, Articles, Pricetypes } = require("./routes");

const colorize = require("chalk");
const { Pricetype } = require("./models");
const log = console.log;

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

// Routes
app.use("/blocks", Blocks);
app.use("/components", Components);
app.use("/articles", Articles);
app.use("/pricetypes", Pricetypes);

app.listen(PORT, () => {
  log(
    colorize
      .bgRgb(40, 200, 255)
      .rgb(0, 0, 0)
      .bold(`Server is running on port ${PORT}!`)
  );
});

module.exports = app;

//Test DB connection
// const db = require("./db");
// db.authenticate()
//   .then(
//     console.log("Connection to PostgreSQL has been established successfully.")
//   )
//   .catch((error) =>
//     console.error("Unable to connect to the PostgreSQL database:", error)
//   );
