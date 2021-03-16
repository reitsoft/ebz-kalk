const Block = require("./Block");
const Component = require("./Component");
const Article = require("./Article");
const Pricetype = require("./Pricetype");

const Block_Component = require("./Block_Component")
const Component_Article = require("./Component_Article")

// Model beziehungen
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

Article.belongsToMany(Component, {
  through: "component_article",
  foreignKey: "article_id",
  timestamps: false
})

Component.belongsToMany(Article, {
  through: "component_article",
  foreignKey: "component_id",
  timestamps: false
})

Pricetype.hasMany(Article, {foreignKey: "pricetype_id"});
Article.belongsTo(Pricetype, {foreignKey: "pricetype_id"})

module.exports = {
  Block,
  Component,
  Article,
  Pricetype,
  Block_Component,
  Component_Article
};
