import React from "react"
import Hamburger from "../Button/Hamburger/Hamburger"
import Inputs from "../Inputs/Inputs"
import Subtitles from "../Subtitles/Subtitles"
import MainBtn from "../Button/MainBtn/MainBtn"
import "./style.css"


const Modal = () => {
    return(
        <div>
        <Hamburger />
        <div className="modal-container">
        <Subtitles name="Love the deals? Sign up now!"/>
        <div className="email">
        <Inputs name="Enter e-mail"/>
        <MainBtn name="Sign up"/>
        </div>
        </div>
        </div>
    )
}

export default Modal 