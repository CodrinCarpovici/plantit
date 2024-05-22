import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendarpage = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
    <div className="container planner-container d-flex flex-column justify-content-center align-items-center text-center">
      <div id="container-fluid">
        <div className="planner-content">
        <h1 className="planner-title" data-text="Plant-Planner"> Plant Planner </h1>
        <button className="btn add reminder-button mx-2">Add Reminder</button>
        <button className="btn remove reminder-button mx-2">Remove Reminder</button>
        </div>
      </div>
    </div>
    
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
    </>
  );
};

export default Calendarpage;
