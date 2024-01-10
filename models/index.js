"use strict";

const User = require("./users");
const Book = require("./book");
const Cart = require("./cart");

async function init() {
  await User.sync();
  await Book.sync();
  await Cart.sync();
}

init();

module.exports = {
  User,
  Book,
  Cart,
};
