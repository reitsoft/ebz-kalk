const { DataTypes } = require("sequelize");
const db = require("../db");

const Article = db.define("article", {
  id: {
    type: DataTypes.STRING(12),
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
});

// Article.sync({ force: true });

module.exports = Article;
