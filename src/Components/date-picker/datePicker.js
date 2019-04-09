import React from 'react';
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const datePicker = () => (
  <>
    <h1>DatePicker</h1>
    <DayPicker selectedDays={new Date()} />
  </>
);

export default datePicker;
