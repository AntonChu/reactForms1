import { useState, useEffect } from "react";
import "./App.css";
import hex2rgb from "./components/converter";

const Feedback = () => {
  const [color, setColor] = useState("");
  let timerID = null;

  const change = (el) => {
    if (timerID) {
      clearTimeout(timerID);
      timerID = null;
    }

    timerID = setTimeout(() => {
      if (el.target.value.length === 7 && el.target.value[0] === "#") {
        setColor(hex2rgb(el.target.value));
        const color2 = hex2rgb(el.target.value);
        el.nativeEvent.srcElement.form.style.backgroundColor = color2;
      } else {
        setColor("Ошибка");
      }
    }, 2000);
  };

  return (
    <form className="form" onChange={change}>
      <input className="input-color" placeholder="Введите HEX цвет"></input>
      <div className="answer">{color}</div>
    </form>
  );
};

function App() {
  return <Feedback />;
}

export default App;
