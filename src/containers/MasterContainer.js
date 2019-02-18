import React from 'react';
import Display from '../components/Display.js';
import SubmissionBox from '../components/SubmissionBox.js';
import '../assets/MasterContainer.css';

class MasterContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      nextUserAction: "",
      textDisplayValue: "",
      currentTextDisplayed: "You awake on the floor of a room. You are alone.",
      roomNumber: 0,
      notValid: "Not a valid response.",
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
    let userActionLowerCase = event.target.value.toLowerCase();
    this.setState({
      nextUserAction: userActionLowerCase,
    })
  }
/////////////WHERE I STOPPED!! TRYING TO MAKE DEFAULT FOR INVALID RESPONSE (RETURNS TO PREVIOUS AFTER 3 SECONDS) AND CHANGING TEXT ON VALID RESPONSE.
  respondToUser = () => {
  // INTRO
    if (this.state.roomNumber === 0) {
      this.setState({
        textDisplayValue: this.state.currentTextDisplayed,
        roomNumber: 1,
      })
    }
  // FIRST ROOM
    if (this.state.roomNumber === 1) {
      switch (this.state.nextUserAction) {
        case "look":
        case "look around":
        case "look around room":
        case "look around the room":
        case "look at room":
        case "look at the room":
          // what room looks like?
          break;
        default:
          // not valid
          this.setState({
            textDisplayValue: this.state.notValid
          })
          setTimeout(this.setState({
            textDisplayValue: this.state.currentTextDisplayed
          }), 3000);
      }
    }

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
