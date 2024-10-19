import { useEffect, useState } from "react";
import "./App.css";
import { Person } from "./types";
import { createRandomPerson } from "./factory";

function App() {
  const [person, setPerson] = useState<Person | null>(null);
  useEffect(() => {
    setPerson(createRandomPerson());
  }, []);
  if (!person) return null;

  return (
    <>
      <h1>Faker UI</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile (Au)</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.phoneMobile}</td>
            <td>{person.email}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
