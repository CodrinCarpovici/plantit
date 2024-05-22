import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendarpage = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-container">
      <div className="date-display">
        <button className="nav-button">{'<'}</button>
        <div className="date">
          <span className="day">{value.getDate()}</span>
          <span className="month-year">{value.toLocaleString('default', { month: 'short' })} - {value.getFullYear()}</span>
        </div>
        <button className="nav-button">{'>'}</button>
      </div>
      <Calendar 
        onChange={setValue} 
        value={value} 
        className="custom-calendar"
        tileClassName={({ date }) => date.getDate() === value.getDate() ? 'active' : ''}
      />
    </div>
  );
};

export default Calendarpage;
