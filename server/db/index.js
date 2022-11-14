//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Address = require("./models/Address");
const Product = require("./models/Product");
const Order = require("./models/Order");
const LineItem = require("./models/LineItem");

// TODO: Keep these commented out for now until we've built the shopping cart page with dummy data and tested it.
// Order.belongsTo(User);
// User.hasMany(Order);
// LineItem.belongsTo(Order);
// Order.hasMany(LineItem);

// I added this to be able to test my work, can be deleted since Michelle already made it -Irais 
Product.hasOne(LineItem, { foreignKey: "productId" });
LineItem.belongsTo(Product);

Address.belongsTo(User);
User.hasOne(Address);

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Address,
    Product,
    Order,
    LineItem,
  },
};
