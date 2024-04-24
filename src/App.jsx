import React, { useState } from 'react';
import DateFilter from './DateFilter';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    // Perform actions based on the selected date range
    console.log('Selected Date Range:', start.toDateString(), '-', end.toDateString());
  };

  return (
    <div>
      <h1>Date Filter Example</h1>
      <DateFilter onDateChange={handleDateChange} />
      {startDate && endDate && (
        <p>
          Selected Date Range: {startDate.toDateString()} - {endDate.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;
