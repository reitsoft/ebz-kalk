const { DataTypes } = require("sequelize");
const db = require("../db");

const Component_Article = db.define("component_article", {
  id: {
    type: DataTypes.STRING(12),
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  component_id: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  article_id: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  timestamps: false
});

// Component_Article.sync({ force: true });

module.exports = Component_Article;
