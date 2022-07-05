import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { Pet } from "./pet.model";

class Person extends Model {
  declare id: number
  declare name: string
  declare lastname: string
  declare email: string
  declare cellphone: string 
  declare age: number
  declare status: boolean
}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    cellphone: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  },
  {
    sequelize
  }
);

Person.hasMany(Pet, {
  foreignKey: 'person_id',
  sourceKey: 'id'
})

Pet.belongsTo(Person, {
  foreignKey: 'person_id',
  targetKey: 'id'
})

export { Person }