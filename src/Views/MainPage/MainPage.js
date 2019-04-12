import React from "react"
import Title from "../../Components/Titles/Titles"
import Subtitle from "../../Components/Subtitles/Subtitles"
import Inputs from "../../Components/Inputs/Inputs"
import "./style.css"
import { ReactComponent as Logo } from '../../Assets/logo5.svg'
import MainBtn from "../../Components/Button/MainBtn/MainBtn"


const text = "Welcome to the Birthday App! Sign up and receive ONE email on your birthday with the best deals in town! Hundreds of free gifts are waiting for you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

const MainPage = (props) => {
    return (
        <div className="main-container">
            <div className="logo-container">
                <Logo class="logo" />
                <Title class="title" name="Birthday" />
            </div>
            <Subtitle class="subtitle" name={text} />
            <Inputs class="inputs" name=" Location" />
            <MainBtn changePage={props.changePage} name="Let's go!" />
        </div>
    )

}
export default MainPage

