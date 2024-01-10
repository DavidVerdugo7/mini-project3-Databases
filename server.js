const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const dbConnect = require("./dbConnect");

const userRoutes = require("./Routes/userRoutes");
const bookRoutes = require("./Routes/bookRoutes");
const cartRoutes = require("./Routes/cartRoutes");

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  dbConnect.query(
    sql,
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server error");
      } else if (result.length > 0) {
        res.status(200).send("Login successful");
      } else {
        res.status(401).send("Invalid username or password");
      }
    }
  );
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Bookstore App!" });
});

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/carts", cartRoutes);
//errors:
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on
port ${PORT}.`);
  console.log(" ~~ Welcome to JD's Capstone Project! ~~");
});
