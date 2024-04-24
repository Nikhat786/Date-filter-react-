import React, { useState } from 'react';
import { startOfMonth, endOfMonth, subMonths, startOfDay, subDays, format } from 'date-fns';
import './DateFilter.css'; // Import CSS file for component styling

const DateFilter = ({ onDateChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('custom');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = () => {
    if (selectedFilter === 'lastMonth') {
      const firstDayOfLastMonth = startOfMonth(subMonths(new Date(), 1));
      const lastDayOfLastMonth = endOfMonth(subMonths(new Date(), 1));
      onDateChange(firstDayOfLastMonth, lastDayOfLastMonth);
    } else if (selectedFilter === 'currentMonth') {
      const firstDayOfCurrentMonth = startOfMonth(new Date());
      const lastDayOfCurrentMonth = endOfMonth(new Date());
      onDateChange(firstDayOfCurrentMonth, lastDayOfCurrentMonth);
    } else if (selectedFilter === 'last30Days') {
      const startDate = startOfDay(subDays(new Date(), 29));
      const endDate = endOfMonth(new Date());
      onDateChange(startDate, endDate);
    } else if (selectedFilter === 'custom') {
      if (startDate && endDate) {
        onDateChange(startDate, endDate);
      }
    }
  };

  return (
    <div className="date-filter-container">
      <select
        className="date-filter-select"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="lastMonth">Last Month</option>
        <option value="currentMonth">Current Month</option>
        <option value="last30Days">Last 30 Days</option>
        <option value="custom">Custom Dates</option>
      </select>
      {selectedFilter === 'custom' && (
        <div className="custom-dates">
          <input
            type="date"
            className="date-input"
            value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
          <input
            type="date"
            className="date-input"
            value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
            onChange={(e) => setEndDate(new Date(e.target.value))}
          />
        </div>
      )}
      <button className="apply-button" onClick={handleDateChange}>
        Apply
      </button>
    </div>
  );
};

export default DateFilter;
