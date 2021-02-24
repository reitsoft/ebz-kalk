const { DataTypes } = require("sequelize");
const db = require("../db");

const Block = db.define("Block", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});

// Block.sync({ alter: true });

module.exports = Block;

//ElephantSQL
// CREATE TABLE "Blocks" (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE, description VARCHAR(500) NOT NULL);
// INSERT INTO "Blocks"(name, description) values('Vorrichtung', 'Geovorrichtungen und Ablagen') returning *;
