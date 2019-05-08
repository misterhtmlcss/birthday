import React from 'react';
import './App.scss';
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
      this.setState({page: arg})
    }

  changes = () => {
    if(this.state.page === "dealsPage") return <DealsPage />
    else return <MainPage changePage={this.changePage}/>

  }

  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet"></link>
        {this.changes()}
      </div>
    )
  }
}

export default App;


