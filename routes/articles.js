const express = require("express");
const router = express.Router();
const { Component, Article, Pricetype } = require("../models");
const { nanoid } = require("nanoid");

// Get all Articles
router.get("/", (req, res) => {
  Article.findAll({ include: [Component, Pricetype] })
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
  Article.findByPk(req.params.id, { include: [Component, Pricetype] })
    .then((article) => {
      res.status(200).json({
        data: article,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// check if article name is unique
router.get("/isunique/:name", (req, res) => {
  const name = req.params.name;
  Article.findOne({ where: { name } })
    .then((name) => name !== null)
    .then((isUnique) => {
      res.status(200).json({
        data: !isUnique,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Create one Article
router.post("/", (req, res) => {
  const { name, description, pricetype_id, price } = req.body;
  // console.log(req.body)
  Article.create({
    id: nanoid(12),
    name,
    description,
    pricetype_id,
    price,
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
  const { name, description, pricetype_id, price } = req.body;
  Article.update(
    {
      name,
      description,
      pricetype_id,
      price,
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
