import { fakerEN_AU as faker } from "@faker-js/faker";
import { Person } from "./types";

export const createRandomPerson = (): Person => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName }),
    phoneMobile: `4${faker.string.numeric({ length: 8 })}`,
  };
};
