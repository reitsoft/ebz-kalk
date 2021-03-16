const express = require("express");
const router = express.Router();
const { Block, Component, Block_Component } = require("../models");
const { nanoid } = require("nanoid");

// Get all blocks
router.get("/", (req, res) => {
  Block.findAll({ include: [Component] })
    .then((blocks) => {
      res.status(200).json({
        data: blocks,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

// Get one block by id
router.get("/:id", (req, res) => {
  Block.findByPk(req.params.id, { include: [Component] })
    .then((block) => {
      res.status(200).json({
        data: block,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Create one block
router.post("/", (req, res) => {
  const { name, description } = req.body;
  Block.create({
    id: nanoid(12),
    name,
    description,
  })
    .then((block) => {
      res.status(201).json(block);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Update one block by id
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
      res.status(400).json(err);
    });
});

// Delete one block by id
router.delete("/:id", (req, res) => {
  Block.destroy({ where: { id: req.params.id } })
    .then(
      res.status(204).json({
        data: "Deleted",
      })
    )
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Add one component to a block
router.post("/:id/addComponent", (req, res) => {
  Block_Component.create({
    id: nanoid(12),
    block_id: req.params.id,
    component_id: req.body.component_id,
  })
    .then((block_component) => {
      res.status(200).json({
        data: block_component,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Delete one component from a block
router.delete("/:id/deleteComponent", (req, res) => {
  Block_Component.destroy({
    where: {
      block_id: req.params.id,
      component_id: req.body.component_id,
    },
  })
    .then((block_component) => {
      res.status(204).json({
        data: block_component,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
