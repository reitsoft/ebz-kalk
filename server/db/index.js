const Sequelize = require("sequelize");

const db = new Sequelize(process.env.PG_URI_LOCAL, {
  timestamps: false,
  logging: false,
});

db.authenticate()
  .then(function (err) {
    console.log("PostgreSQL connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

module.exports = db;
