const express = require("express");
const router = express.Router();
const { Block } = require("../models");
const { nanoid } = require("nanoid");

router.get("/", (req, res) => {
  Block.findAll()
    .then((blocks) => {
      res.status(200).json({
        data: blocks,
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
  Block.findByPk(req.params.id)
    .then((block) => {
      res.status(200).json({
        data: block,
      });
    })
    .catch((err) => {
      res.Status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { name, description } = req.body;
  Block.create({
    id: nanoid(12),
    name,
    description,
  })
    .then((block) => {
      res.status(200).json({
        data: block,
      });
    })
    .catch((err) => {
      res.Status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  const { name, description } = req.body;
  Block.update(
    {
      name,
      description,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then((block) => {
      res.status(200).json({
        data: block,
      });
    })
    .catch((err) => {
      res.Status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Block.destroy({ where: { id: req.params.id } })
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
