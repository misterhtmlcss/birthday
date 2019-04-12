import React from "react"
import Title from "../../Components/Titles/Titles"
import Modal from "../../Components/Modal/Modal"
import "./style.css"

const DealsPage = () => {
    return (
        <div className="deals-container">
            <Modal />
            <div className="deals">
                <Title name="Deals" />
            </div>
        </div>
    )
}
export default DealsPage