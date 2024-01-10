"use strict";

const Models = require("../models");
const { Cart } = require("../models");

const getCarts = (res) => {
  Cart.findAll({})
    .then(function (data) {
      res.status(200).json({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error retrieving carts" });
    });
};

const getCartById = async (id, res) => {
  try {
    const cart = await Models.Cart.findByPk(id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error trying to find cart by ID" });
  }
};

const createCart = (data, res) => {
  Models.Cart.create(data)
    .then(function (data) {
      res.status(201).json({ data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error creating cart" });
    });
};

const updateCart = (req, res) => {
  Models.Cart.update(req.body, { where: { cart_id: req.params.id } })
    .then(function (data) {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating cart" });
    });
};

const deleteCart = (req, res) => {
  Models.Cart.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting cart" });
    });
};

module.exports = {
  getCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
};
