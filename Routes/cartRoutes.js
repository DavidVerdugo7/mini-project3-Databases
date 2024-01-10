const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.cartController.getCarts(res);
});

// //to GET an Cart by id
router.get("/:id", (req, res) => {
  Controllers.cartController.getCartById(req.params.id, res);
});

router.post("/create", (req, res) => {
  Controllers.cartController.createCart(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.cartController.updateCart(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.cartController.deleteCart(req, res);
});

module.exports = router;
