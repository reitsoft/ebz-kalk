const Sequelize = require("sequelize");

module.exports = new Sequelize(process.env.PG_URI_LOCAL, {
  timestamps: false,
  logging: false
});
