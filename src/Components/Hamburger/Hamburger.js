import React from "react"
import "./style.css"
import DrawerTogggleButton from "../../DrawerToggleButton/DrawerToggleButton"
import SideDrawer from '../../SideDrawer/SideDrawer'
// import BackDrop from "../../BackDrop/BackDrop"

class Hamburger extends React.Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return ({ sideDrawerOpen: !prevState.sideDrawerOpen })
    })
  }


  render() {
    return (
      <div>
        <DrawerTogggleButton click={this.drawerToggleClickHandler} />
        <SideDrawer toggle={this.drawerToggleClickHandler} sideDrawerOpen={this.state.sideDrawerOpen} />

      </div>

    )
  }

}


export default Hamburger

