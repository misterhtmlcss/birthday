import React from "react"
import Title from "../../Components/Titles/Titles"
import Subtitle from "../../Components/Subtitles/Subtitles"
import Inputs from "../../Components/Inputs/Inputs"
import "./style.css"
import { ReactComponent as Logo } from '../../Assets/logo5.svg'
import Btn from "../../Components/button/btnMain"


const text = "Welcome to the Birthday App! Sign up and receive ONE email on your birthday with the best deals in town! Hundreds of free gifts are waiting for you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

const MainPage = (props) => {
    return (
        <div class="div">
            <Logo class= "logo"/>
            <Title class="title" name="Birthday" />
            <Subtitle class="subtitle" name={text} /><br />
            <Inputs class="inputs" name=" Location" /><br/>
            <Btn changePage={props.changePage} name="Let's go!"/><br/>
        </div>
    )

}
export default MainPage

