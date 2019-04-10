import React from 'react';

const btnMain = (props) => {
  return(
    <div>
    <button onClick={() => props.changePage("dealsPage")}>{props.name}</button>
    </div>
  )
  };

export default btnMain;