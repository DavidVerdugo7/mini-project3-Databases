"use strict";

const Models = require("../models");
const { Book } = require("../models");

const getBooks = (res) => {
  Models.Book.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
//to GET an Book by id
const getBookById = async (id, res) => {
  try {
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error trying to find Book by ID" });
  }
};

const createBook = (data, res) => {
  Models.Book.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createBooks = async (req, res) => {
  try {
    const booksData = req.body;
    const createdBooks = await Book.bulkCreate(booksData);
    res
      .status(201)
      .json({ message: "Books created successfully", books: createdBooks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating books", error: error.message });
  }
};

const updateBook = (req, res) => {
  Models.Book.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const deleteBook = (req, res) => {
  Models.Book.destroy({ where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  createBooks,
  updateBook,
  deleteBook,
};
