const express = require("express");
const router = express.Router();
const db = require("../db");
const Blocks = require("../models/Block");

router.get("/", (req, res) => {
  Blocks.findAll()
    .then((blocks) => {
      res.status(200).json({
        data: blocks,
      });
    })
    .catch((err) => {
      console.log(err);
      res.Status(400).json({
        err
      });
    });
});

module.exports = router;
