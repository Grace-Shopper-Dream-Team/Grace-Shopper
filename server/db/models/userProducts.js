const Sequelize = require("sequelize");
const db = require("../db");

const userProducts = db.define("userProducts", {
  productId: {
    type: Sequelize.INTEGER,
  },
  allOrdersId: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  qty: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
    },
    defaultValue: 1,
  },
});

module.exports = userProducts;
