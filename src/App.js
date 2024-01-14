import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // STATE
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // DATE
  let today = new Date();
  let date = new Date(
    new Date(today).setDate(today.getDate() + count)
  ).toDateString();
  // BUTTONS FUNCTIONS
  function incraseStep() {
    setStep((s) => s + 1);
  }
  function decreaseStep() {
    setStep((s) => s - 1);
  }
  function incraseCount() {
    setCount((c) => c + step);
  }
  function decreaseCount() {
    setCount((c) => c - step);
  }
  return (
    <div className="App">
      <div className="step">
        <button onClick={decreaseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={incraseStep}>+</button>
      </div>

      <div className="count">
        <button onClick={decreaseCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={incraseCount}>+</button>
      </div>
      <span>
        {count} days from today is {date}
      </span>
    </div>
  );
}

export default App;

//const [date, setDate] = useState(new Date());
// //// DATE COPY
// let prescription = {
//   prescriptionDate: new Date(), // Today
//   prescriptionExpirationDate: count, // Days to add
// };
// let date = new Date(
//   new Date(prescription.prescriptionDate).setDate(
//     prescription.prescriptionDate.getDate() +
//       prescription.prescriptionExpirationDate
//   )
// ).toDateString();
// console.log(date); // 7 days from today
// ///// DATE COPY
//// DATE COPY
// let prescription = {
//   prescriptionDate: new Date(), // Today
//   prescriptionExpirationDate: count, // Days to add
// };   console.log(date);
///// DATE COPY
