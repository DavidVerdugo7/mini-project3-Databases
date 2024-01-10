const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.bookController.getBooks(res);
});

//to GET an book by id
router.get("/:id", (req, res) => {
  Controllers.bookController.getBookById(req.params.id, res);
});

router.post("/create", (req, res) => {
  Controllers.bookController.createBook(req.body, res);
});

router.post("/create/multiple", (req, res) => {
  Controllers.bookController.createBooks(req, res); // Se invoca el método createBooks del controlador
});

router.put("/:id", (req, res) => {
  Controllers.bookController.updateBook(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.bookController.deleteBook(req, res);
});

module.exports = router;
