import { DataTypes } from "sequelize";
import { sequelize } from "../database";

export const Pet = sequelize.define(
  "pets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    race: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    tableName: "PETS",
  }
);