import { Person } from "../models/person.model";
import { Pet } from "../models/pet.model";
import { PersonType } from "../types/person";

export class PersonService {
  async findAll() {
    const persons: Array<Person> = await Person.findAll({
      include: Pet
    });
    return persons;
  }

  async findById(id: number) {
    const person: Person | null = await Person.findByPk(id);
    return person;
  }

  async save(person: PersonType) {
    const { name, lastname, email, cellphone, age }: PersonType = person;

    return await Person.create({
      name,
      lastname,
      email,
      cellphone,
      age,
    });
  }

  async deleteById(id: number) {
    await Person.destroy({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, person: PersonType) {
    return this.findById(id).then((personData) => {
      if (personData) {
        personData.set(person);
        personData.save();
        return personData;
      }
      return {};
    });
  }
}
