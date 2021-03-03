const { DataTypes } = require("sequelize");
const db = require("../db");

const Block_Component = db.define("block_components", {
  id: {
    type: DataTypes.STRING(12),
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  block_id: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  component_id: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
},{
  timestamps: false,
  freezeTableName: true
});

// Block_Component.sync({ force: true });

module.exports = Block_Component;
