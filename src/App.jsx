import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Filter, SetFilter] = useState([]);
  const [input,SetInput] = useState("");
  const peopleArray = [
    { name: "John", age: 30, salary: 50000 },
    { name: "Alice", age: 25, salary: 60000 },
    { name: "Bob", age: 35, salary: 75000 },
    { name: "Eva", age: 28, salary: 55000 },
    { name: "Mike", age: 32, salary: 70000 },
    { name: "Sarah", age: 27, salary: 58000 },
    { name: "David", age: 40, salary: 80000 },
    { name: "Emily", age: 22, salary: 48000 },
    { name: "Alex", age: 33, salary: 72000 },
    { name: "Grace", age: 29, salary: 65000 },
  ];
  const HandleClickFilter = () => {
    let FilteredAg = peopleArray.filter((person) => person.age === input);
    SetFilter(FilteredAg);
  };

  return (
    <>
      <div className="container p-3 bg-dark mt-2 rounded-2 d-grid gap-3">
        <h1 className="text-light text-center">Personal Information</h1>
        <div className="d-flex gap-2">
          <input onChange={(e) => SetInput(parseInt(e.target.value))} className="form-control" type="number" placeholder="Filter" />
          <button onClick={HandleClickFilter} className="btn btn-success fw-bold text-light ">
            Filter
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {Filter.length > 0
              ? Filter.map(({ name, age, salary }, index) => (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>${salary}</td>
                  </tr>
              ))
              : peopleArray.map(({ name, age, salary }, index) => (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>${salary}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
