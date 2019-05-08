import React from 'react'
import Inputs from "../Inputs/Inputs"
import MainBtn from "../Button/MainBtn/MainBtn"
import DatePicker from "../../Components/date-picker/datePicker"

import './style.scss'

const Form = () => (
  <div className="form">
    <Inputs name="Enter E-mail"/>
    <DatePicker />
    <MainBtn name="Sign up"/>
  </div>
)

export default Form
