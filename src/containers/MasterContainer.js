import React from 'react';
import Display from '../components/Display.js';
import SubmissionBox from '../components/SubmissionBox.js';

class MasterContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      nextUserAction: "",
    }
  }

  submitUserAction = (event) => {
    event.preventDefault()
    let userInput = document.getElementById("user-input")
    userInput.value = ""
    console.log("this", this.state.nextUserAction);
  }

  getUserAction = (event) => {
    this.setState({
      nextUserAction: event.target.value,
    })
  }

  render(){
    return(
      <div id="master-container">
        <Display />
        <SubmissionBox state={this.state} submitUserAction={this.submitUserAction} getUserAction={this.getUserAction}/>
      </div>
    )
  }
}

export default MasterContainer;
