import React from 'react'
import { ReactComponent as Logo } from '../../Assets/logo5.svg'
import Title from "../../Components/Titles/Titles"
import Hamburger from "../../Components/Hamburger/Hamburger"

import "./style.scss"

const Banner = () => (
  <div className="logo-container">
    <Hamburger />
    <a className="banner-box" href="/" alt="homepage link">
      <Logo className="logo" />
      <Title className="title" name="Birthday" />
    </a>
  </div>
)

export default Banner



