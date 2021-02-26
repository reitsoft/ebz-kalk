const { DataTypes } = require("sequelize");
const db = require("../db");

const Component = db.define("component", {
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

// Component.sync({ alter: true });

module.exports = Component;
