import React from 'react';

class MainBtn extends React.Component {
  constructor(props){
    super(props)
  }

button = () =>{
  if (this.props.action === "dealsPage"){
    return <button onClick={() => this.props.changePage("dealsPage")}>{this.props.name}</button>
  }
  return <button>{this.props.name}</button>
}
 render(){
  return(
    <div>
    {this.button()}
    </div>
  )

 }

  };

export default MainBtn;