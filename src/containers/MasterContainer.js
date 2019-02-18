import React from 'react';
import Display from '../components/Display.js';
import SubmissionBox from '../components/SubmissionBox.js';
import '../assets/MasterContainer.css';

class MasterContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      nextUserAction: "",
      textDisplayValue: "You awake on the floor of a room. You are alone.",
      roomNumber: 0,
    }
  }
// INPUT CLEARS BUT IF YOU PRESS ENTER AGAIN IT SUBMITS THE LAST SUBMISSION!! (ADD IF/ELSE TO MAKE SURE EMPTY INPUT'S SAY "YOU NEED TO ENTER A THING")
  submitUserAction = (event) => {
    event.preventDefault()
    let userInput = document.getElementById("user-input")
    userInput.value = ""
    console.log("this", this.state.nextUserAction);
    this.respondToUser();
  }

  getUserAction = (event) => {
    this.setState({
      nextUserAction: event.target.value,
    })
  }

  respondToUser = () => {
    console.log('wejncsw',this.state.nextUserAction);
  }





  render(){
    return(
      <div id="master-container">
        <h1 id="title">HUNTED</h1>
        <Display textDisplayValue={this.state.textDisplayValue} />
        <SubmissionBox state={this.state} submitUserAction={this.submitUserAction} getUserAction={this.getUserAction}/>
      </div>
    )
  }
}

export default MasterContainer;
