const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "username", // Esto se ajusta al campo real en la base de datos
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Si es necesario, puedes agregar las columnas createdAt y updatedAt
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "User", // Asegúrate de que el nombre del modelo sea singular
    tableName: "users", // Asegúrate de que el nombre de la tabla sea el correcto
    timestamps: false,
    underscored: true, // Esto asegura que las columnas tengan el formato de snake_case
  }
);

module.exports = User;
