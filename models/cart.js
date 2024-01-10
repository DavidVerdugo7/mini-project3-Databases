const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const User = require("./users");
const Book = require("./book");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Book,
        key: "book_id",
      },
    },
    book_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Cart",
    tableName: "cart",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Cart;
