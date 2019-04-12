import React from "react"
// import { triggerAsyncId } from "async_hooks";
import "./style.css"

const sideDrawer = props => (
    <div>
        <nav className={props.sideDrawerOpen ? 'side-drawer-open' : "side-drawer-closed"}>
            <span className="close" onClick={props.toggle}>x</span>
            <ul>
                <li> <a href="/">Products</a></li> 
                <li> <a href="/">Users</a></li>
            </ul>

        </nav>
    </div>

)

export default sideDrawer

//pass down page changer