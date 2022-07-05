import { BaseType } from "./base_type";
import { PetType } from "./pet";

export type PersonType = BaseType & {
  name: string;
  lastname: string;
  email: string;
  cellphone: string;
  age: number;
  pets: Array<PetType>;
};
