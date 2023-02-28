import { useState, useEffect } from "react";
import "./App.css";
import hex2rgb from "./js/converter";

const Feedback = () => {
  const [color, setColor] = useState("");

  const change = (el) => {
    if (el.target.value.length === 7 && el.target.value[0] === "#") {
      setColor(hex2rgb(el.target.value));
    } else {
      setColor("Ошибка");
    }
  };

  return (
    <form className="form" onChange={change} style={{backgroundColor: `${color}`}}>
      <input className="input-color" placeholder="Введите HEX цвет"></input>
      <div className="answer">{color}</div>
    </form>
  );
};

function App() {
  return <Feedback />;
}

export default App;
