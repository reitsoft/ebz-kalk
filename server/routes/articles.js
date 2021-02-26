const express = require("express");
const router = express.Router();
const { Component, Article } = require("../models");
const { nanoid } = require("nanoid");

// Get all Articles
router.get("/", (req, res) => {
  Article.findAll()
    .then((articles) => {
      res.status(200).json({
        data: articles,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

// Get Article by Id
router.get("/:id", (req, res) => {
  Article.findByPk(req.params.id, { include: [Block] })
    .then((article) => {
      res.status(200).json({
        data: article,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Create one Article
router.post("/", (req, res) => {
  const { block_id, name, description } = req.body;
  Article.create({
    id: nanoid(12),
    block_id,
    name,
    description,
  })
    .then((article) => {
      res.status(200).json({
        data: article,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Update one Article
router.put("/:id", (req, res) => {
  const { name, description } = req.body;
  Article.update(
    {
      name,
      description,
    },
    {
      where: { id: req.params.id },
      returning: true,
    }
  )
    .then((article) => {
      res.status(200).json({
        data: article,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Delete one Article
router.delete("/:id", (req, res) => {
  Article.destroy({ where: { id: req.params.id } })
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
