const { DataTypes } = require("sequelize");
const db = require("../db");

const Component = db.define("components", {
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
}, {
  freezeTableName: true
});

// Component.sync({ force: true });

module.exports = Component;
