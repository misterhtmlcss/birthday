import React from 'react';

const MainBtn = (props) => {
  return(
    <div>
    <button onClick={() => props.changePage("dealsPage")}>{props.name}</button>
    </div>
  )
  };

export default MainBtn;