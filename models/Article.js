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
  pricetype_id: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  price:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  }

});

// Article.sync({ alter: true });

module.exports = Article;
