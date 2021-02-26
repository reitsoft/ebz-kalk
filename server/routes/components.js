const express = require("express");
const router = express.Router();
const { Component } = require("../models");
const { nanoid } = require("nanoid");

router.get("/", (req, res) => {
  Component.findAll()
    .then((components) => {
      res.status(200).json({
        data: components,
      });
    })
    .catch((err) => {
      res.Status(400).json({
        err,
      });
    });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  Component.findByPk(req.params.id)
    .then((component) => {
      res.status(200).json({
        data: component,
      });
    })
    .catch((err) => {
      res.Status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { name, description } = req.body;
  Component.create({
    id: nanoid(12),
    name,
    description,
  })
    .then((component) => {
      res.status(200).json({
        data: component,
      });
    })
    .catch((err) => {
      res.Status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  const { name, description } = req.body;
  Component.update(
    {
      name,
      description,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then((component) => {
      res.status(200).json({
        data: component,
      });
    })
    .catch((err) => {
      res.Status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Component.destroy({ where: { id: req.params.id } })
    .then(
      res.status(200).json({
        data: "Deleted",
      })
    )
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
