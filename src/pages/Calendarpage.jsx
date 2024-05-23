import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendarpage = () => {
  const [value, setValue] = useState(new Date());

  const reminders = [
    { id: 1, plantName: 'Rose', action: 'Water' },
    { id: 2, plantName: 'Tulip', action: 'Fertilize' },
    { id: 3, plantName: 'Cactus', action: 'Prune' },
  ];

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
          <div className="date">
            <span className="day">{value.getDate()}</span>
            <span className="month-year">{value.toLocaleString('default', { month: 'short' })} - {value.getFullYear()}</span>
          </div>
        </div>
        <Calendar 
          onChange={setValue} 
          value={value} 
          className="custom-calendar"
          tileClassName={({ date }) => date.getDate() === value.getDate() ? 'active' : ''}
        />
      </div>
      <div className="calendar-container mt-5">
        <div className="row">
          {reminders.map(reminder => (
            <div className="col-md-4 mb-4" key={reminder.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{reminder.plantName}</h5>
                  <p className="card-text">Action: {reminder.action}</p>
                  <button className="btn remove">Mark as Done</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Calendarpage;
