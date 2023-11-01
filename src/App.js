import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 200);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <RatingService percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service ?
      </RatingService>
      <RatingService percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service ?
      </RatingService>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <ResetAmount onResetAmount={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill ?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function RatingService({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0" key={0}>
          Dissatisfied (0%)
        </option>
        <option value="5" key={5}>
          It was okey (5%)
        </option>
        <option value="10" key={10}>
          It was good (10%)
        </option>{" "}
        <option value="20" key={20}>
          Absolutely amazing! (20%)
        </option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay {bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function ResetAmount({ onResetAmount }) {
  return <button onClick={onResetAmount}>Reset</button>;
}
