import { useState } from "react";

import "./Form.css";

import FormActions from "./FormActions";

const Form = (props) => {
  const [enteredSavings, setSavings] = useState("");
  const [enteredContributions, setContributions] = useState("");
  const [enteredInterestRate, setInterestRate] = useState("");
  const [enteredDuration, setDuration] = useState("");

  const savingsChangeHandler = (e) => {
    setSavings(e.target.value);
  };

  const contributionsChangeHandler = (e) => {
    setContributions(e.target.value);
  };

  const interestRateChangeHandler = (e) => {
    setInterestRate(e.target.value);
  };

  const durationChangeHandler = (e) => {
    setDuration(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const investmentData = {
      savings: enteredSavings,
      contributions: enteredContributions,
      interestRate: enteredInterestRate,
      duration: enteredDuration,
    };

    // console.log(calculateHandler(investmentData));
    props.onSaveYearlyData(investmentData);

    setSavings("");
    setContributions("");
    setInterestRate("");
    setDuration("");
  };

  const resetHandler = (e) => {
    e.preventDefault();

    setSavings("");
    setContributions("");
    setInterestRate("");
    setDuration("");
  };

  return (
    <form className="form" onSubmit={submitHandler} onReset={resetHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredSavings}
            onChange={savingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Contributions ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredContributions}
            onChange={contributionsChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredInterestRate}
            onChange={interestRateChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredDuration}
            onChange={durationChangeHandler}
          />
        </p>
      </div>
      <FormActions />
    </form>
  );
};

export default Form;
