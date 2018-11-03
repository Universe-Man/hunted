import React from 'react';
import Display from '../components/Display.js';
import SubmissionBox from '../components/SubmissionBox.js';

class MasterContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      nextUserAction: ""
    }
  }

  submitUserAction = (event) => {
    event.preventDefault()
    let userInput = document.getElementById("user-input")
    userInput.reset()
    console.log(event.target.value);
  }

  getUserAction = (event) => {
    console.log(event.target.value);
  }

  render(){
    return(
      <div id="master-container">
        <Display />
        <SubmissionBox submitUserAction={this.submitUserAction} getUserAction={this.getUserAction}/>
      </div>
    )
  }
}

export default MasterContainer;
