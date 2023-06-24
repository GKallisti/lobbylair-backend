const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Subscriptions",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      },
    },
    {
      paranoid: true,
    }
  );
};
