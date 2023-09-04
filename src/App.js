import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form/Form";
import Table from "./Table/Table";

function App() {
  const [data, setData] = useState(null);

  const onSaveYearlyDataHandler = (enteredData) => {
    const yearlyData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    setData(yearlyData);
  };

  return (
    <div>
      <Header />

      <Form onSaveYearlyData={onSaveYearlyDataHandler} />

      {!data ? (
        <p>No investment calculated</p>
      ) : (
        <Table onSaveYearlyData={data} />
      )}
    </div>
  );
}

export default App;
