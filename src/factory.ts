import { fakerEN_AU as faker } from "@faker-js/faker";
import { Person } from "./types";

export const createRandomPersons = (count: number): Person[] => {
  const persons: Person[] = [];
  if (count <= 0) return persons;

  const generatePerson = () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      firstName,
      lastName,
      email: faker.internet.email({ firstName, lastName }),
      phoneMobile: `4${faker.string.numeric({ length: 8 })}`,
    };
  };

  for (let i = count; i > 0; i--) {
    persons.push(generatePerson());
  }
  return persons;
};
