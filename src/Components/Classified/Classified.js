import React from "react"
import "./style.css"

const Classified = (props) =>{
 console.log("TCL: Classified -> props", props)
 
    return(
        <div className="classified-container">
            <p>{props.name}</p>
            <img src={props.image} alt="co logo"/>
            <p>{props.description}</p>
            <p>Address:{props.location}</p>
            <p>City: {props.city}</p>
        </div>


    )


}

export default Classified

