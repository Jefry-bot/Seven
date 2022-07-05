import { Pet } from "../models/pet.model";
import { PetType } from "../types/pet";

export class PetService {
  async findAll() {
    const pets: Array<Pet> = await Pet.findAll();
    return pets;
  }

  async findById(id: number) {
    const pet: Pet | null = await Pet.findOne({ where: { id } });
    return pet;
  }

  async save(pet: PetType) {
    const { name, age, race, personId }:PetType = pet;
    console.log(pet)

    return await Pet.create({
      name,
      age,
      race,
      personId
    });
  }
}
