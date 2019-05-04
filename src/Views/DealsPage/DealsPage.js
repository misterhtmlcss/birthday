import React from "react"
import Title from "../../Components/Titles/Titles"
import Modal from "../../Components/Modal/Modal"
import Classifieds from "../../Components/Classifieds/Classifieds"

import "./style.css"

const DealsPage = () => {
    return (
        <div className="deals-container">
            <Modal />
            <div className="deals">
                <Title name="Deals" /><br/>
                <Classifieds />
            </div>
        </div>
    )
}
export default DealsPage