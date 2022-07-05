import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

class Pet extends Model {
  declare id: number;
  declare name: string;
  declare race: string;
  declare age: number;
  declare status: boolean;
  declare personId: number
}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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
    sequelize,
  }
);

export { Pet };
