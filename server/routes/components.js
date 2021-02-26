const express = require("express");
const router = express.Router();
const { Component, Article, Component_Article } = require("../models");
const { nanoid } = require("nanoid");

// Get all components
router.get("/", (req, res) => {
  Component.findAll()
    .then((components) => {
      res.status(200).json({
        data: components,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

// Get component by Id
router.get("/:id", (req, res) => {
  Component.findByPk(req.params.id, { include: [Block] })
    .then((component) => {
      res.status(200).json({
        data: component,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Create one component
router.post("/", (req, res) => {
  const { block_id, name, description } = req.body;
  Component.create({
    id: nanoid(12),
    block_id,
    name,
    description,
  })
    .then((component) => {
      res.status(200).json({
        data: component,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Update one component
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
      res.status(400).json(err);
    });
});

// Delete one component
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

// Add one article to component
router.post("/:id/addArticle", (req, res) => {
  Component_Article.create({
    id: nanoid(12),
    component_id: req.params.id,
    article_id: req.body.article_id,
  })
    .then((component_article) => {
      res.status(200).json({
        data: component_article,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Delete one article from a component
router.delete("/:id/deleteArticle", (req, res) => {
  Component_Article.destroy({
    where: {
      component_id: req.params.id,
      article_id: req.body.article_id,
    },
  })
    .then((component_article) => {
      res.status(200).json({
        data: component_article,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
