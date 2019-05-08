import React from 'react';
import "./style.scss"

const MainBtn = (props) => (
  <div className="btn">
    {/* Let's go */}
    {
      props.action === "dealsPage" ? <button className="button" onClick={() => props.changePage("dealsPage")}>{props.name}</button> : <button className="button">{props.name}</button>
    }
  </div>
)

export default MainBtn;