import React, { Fragment } from 'react';
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const datePicker = () => (
  <Fragment>
  <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />
  </Fragment>
);

export default datePicker;
