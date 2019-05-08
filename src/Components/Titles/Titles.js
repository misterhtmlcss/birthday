import React from "react"
import "./style.css"


const Title = (props) => {
    return (
        <div className="title">
            {props.name}
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"></link>
        </div>
    )

}
export default Title
