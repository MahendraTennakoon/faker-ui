import { useEffect, useState } from "react";
import "./App.css";
import { Person } from "./types";
import { createRandomPersons } from "./factory";

function App() {
  const [persons, setPersons] = useState<Person[] | null>(null);
  useEffect(() => {
    setPersons(createRandomPersons(2));
  }, []);
  if (!persons) return null;

  return (
    <>
      <h1>Faker UI</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile (Au)</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phoneMobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
