require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Blocks, Components, Articles, Pricetypes, BasicRoutes, } = require("./routes");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", BasicRoutes);
app.use("/blocks", Blocks);
app.use("/components", Components);
app.use("/articles", Articles);
app.use("/pricetypes", Pricetypes);

app.listen(PORT, () => {
  console.log("Server is up!");
});

module.exports = app;
