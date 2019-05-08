
import React from "react"
import Banner from "../../Components/Banner/Banner"
import Subtitle from "../../Components/Subtitles/Subtitles"
import Inputs from "../../Components/Inputs/Inputs"
import MainBtn from "../../Components/Button/MainBtn/MainBtn"

import "./style.scss"

const text = "Welcome to the Birthday App! Sign up and receive ONE email on your birthday with the best deals in town! Hundreds of free gifts are waiting for you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

const MainPage = (props) => (
  <>
    <Banner />
    <div className="main-container">
        <Subtitle className="subtitle" name={text} />
        <Inputs className="inputs" name="Location" />
        <MainBtn
          action="dealsPage"
          changePage={props.changePage}
          name="Let's go!" />
    </div>
  </>
)


export default MainPage

