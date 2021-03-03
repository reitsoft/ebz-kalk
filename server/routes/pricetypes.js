const express = require("express");
const router = express.Router();
const { Pricetype, Article } = require("../models");
const { nanoid } = require("nanoid");

// Get all Pricetypes
router.get("/", (req, res) => {
  Pricetype.findAll()
    .then((pricetypes) => {
      res.status(200).json({
        data: pricetypes,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

// Get Pricetype by Id
router.get("/:id", (req, res) => {
  Pricetype.findByPk(req.params.id, { include: [Article] })
    .then((pricetype) => {
      res.status(200).json({
        data: pricetype,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Create one Pricetype
router.post("/", (req, res) => {
  const { name, description } = req.body;
  Pricetype.create({
    id: nanoid(12),
    name,
    description,
  })
    .then((pricetype) => {
      res.status(200).json({
        data: pricetype,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Update one Pricetype
router.put("/:id", (req, res) => {
  const { name, description } = req.body;
  Pricetype.update(
    {
      name,
      description,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then((pricetype) => {
      res.status(200).json({
        data: pricetype,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Delete one Pricetype
router.delete("/:id", (req, res) => {
  Pricetype.destroy({ where: { id: req.params.id } })
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
