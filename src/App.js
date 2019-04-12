import React from 'react';
import './App.css';
import MainPage from "./Views/MainPage/MainPage"
import DealsPage from "./Views/DealsPage/DealsPage"

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state={
    page: "mainPage"
  }
  }
  changePage = (arg) => {
    console.log('hello')
      this.setState({page: arg})
    }

  changes = () => {
    if(this.state.page === "dealsPage"){
      return <DealsPage />
    }else{
      return <MainPage changePage={this.changePage}/>
    }
  }


  render() {
    return (
      <div>
      {this.changes()}
      </div>

    )
  }

}

export default App;


