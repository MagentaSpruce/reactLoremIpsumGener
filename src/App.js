import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
    console.log("working");
  };
  return (
    <section className="section-center">
      <h3>Tired of the same old Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleClick}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
