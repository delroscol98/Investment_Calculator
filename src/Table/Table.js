import "./Table.css";

const Table = (props) => {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["contributions"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["interestRate"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution,
        key: Math.floor(Math.random() * 1000).toString(),
      });
    }

    // do something with yearlyData ...
    // console.log(yearlyData);
    return yearlyData;
  };

  // console.log(calculateHandler(props.onSaveYearlyData));
  const data = calculateHandler(props.onSaveYearlyData);

  return (
    //     {/* Todo: Show below table conditionally (only once result data is available) */}
    //   {/* Show fallback text if no data is available */}
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {data.map((year) => {
        return (
          <tbody key={Math.random()}>
            <tr>
              <td>{year.year}</td>
              <td>{year.savingsEndOfYear}</td>
              <td>{year.yearlyInterest}</td>
              <td>
                {(
                  year.savingsEndOfYear -
                  props.onSaveYearlyData.savings -
                  year.yearlyContribution * year.year
                ).toFixed(2)}
              </td>
              <td>
                {(
                  +props.onSaveYearlyData.savings +
                  year.yearlyContribution * year.year
                ).toFixed(2)}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Table;
