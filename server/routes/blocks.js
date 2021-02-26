const express = require("express");
const router = express.Router();
const { Block } = require("../models");

module.exports = router.get("/", (req, res) => {
  Block.findAll()
    .then((blocks) => {
      res.status(200).json({
        data: blocks,
      });
    })
    .catch((err) => {
      console.log(err);
      res.Status(400).json({
        err,
      });
    });
});
