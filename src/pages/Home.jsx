
import { useState } from "react";
import Card from "../components/Card";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">

      <h1>Welcome to Student Portal</h1>

      <p>Manage your student information easily.</p>

      <div className="counter">
        <h2>Counter: {count}</h2>

        <button onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      <h2>Student Identity Card</h2>

      <Card
        name="Gokul"
        dept="Computer Science"
        year="III Year"
      />
      
      <h2>Student Identity Card</h2>

      <Card
        name="Hamadh ismail"
        dept="Computer Science"
        year="III Year"
      />

    </div>
  );
}

export default Home;
