const Block = require("./Block");
const Component = require("./Component");
const Article = require("./Article");
const Pricetype = require("./Pricetype");

const Block_Component = require("./Block_Component")


// Model beziehungen
// Block.hasMany(Component, {foreignKey: "block_id"});
// Component.belongsTo(Block, {foreignKey: "block_id"})

Component.belongsToMany(Block, {
  through: "block_component",
  foreignKey: "component_id",
  timestamps: false
})

Block.belongsToMany(Component, {
  through: "block_component",
  foreignKey: "block_id",
  timestamps: false
})

module.exports = {
  Block,
  Component,
  Article,
  Pricetype,
  Block_Component
};
