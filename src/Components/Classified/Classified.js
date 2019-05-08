import React from "react"
import "./style.scss"

const Classified = (props) =>(
  <div className="classified-container">
      <div className="inner-info">

        <img src={require(`../../Assets/${props.image}`)} alt="co logo"/>
      </div>
      <div className="inner-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>Address: {props.location} {props.city}</p>
      {/* <p>City: </p> */}
      </div>
  </div>
)

export default Classified

