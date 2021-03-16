const { DataTypes } = require("sequelize");
const db = require("../db");

const Block = db.define("block", {
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

// Block.sync({ force: true });

module.exports = Block;
