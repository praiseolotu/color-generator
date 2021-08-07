import React, { useState } from "react";

import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");

  const [howMany, setHowMany] = useState(0);

  const [error, setError] = useState(false);

  const [list, setList] = useState(new Values("#7a7a7a").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    let howMuch = parseInt(howMany);
    console.log(howMuch);
    try {
      let colors = new Values(color).all(howMuch);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3 className="header">color: </h3>
        <form onSubmit={handleSubmit} className="form-style">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#7a7a7a"
            className={`"header-low ${error ? "error" : null}"`}
          />
          <select
            value={howMany}
            onChange={(e) => setHowMany(e.target.value)}
            className="lower"
          >
            <option disabled>Select Number: </option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="1">1</option>
          </select>
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((each, index) => {
          return (
            <SingleColor
              key={index}
              {...each}
              index={index}
              hexColor={each.hex}
              howMany={howMany}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
