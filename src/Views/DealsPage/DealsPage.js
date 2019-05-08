import React from "react"
import Banner from "../../Components/Banner/Banner"
import Modal from "../../Components/Modal/Modal"
import Classifieds from "../../Components/Classifieds/Classifieds"

import "./style.scss"

const DealsPage = () => (
  <>
      <Banner/>
      <Modal />
      <div className="deals">
          <Classifieds />
      </div>

  </>
)
export default DealsPage