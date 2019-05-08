import React from "react"

import Subtitles from "../Subtitles/Subtitles"
import Form from '../Form/Form'

import "./style.scss"

const Modal = () => (
  <div className="modal-container">
      <Subtitles name="Love the deals? Sign up now!"/>
      <Form />
  </div>
)

export default Modal