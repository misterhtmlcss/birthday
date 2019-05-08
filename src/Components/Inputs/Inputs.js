import React from "react"
import "./style.scss"

const Inputs = ({name}) => (
  <div className="email">
    <label htmlFor=""></label>
    <input type="email"  placeholder={name} autoFocus></input>
  </div>
)

export default Inputs