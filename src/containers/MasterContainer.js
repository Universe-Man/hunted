import React from 'react';
import Display from '../components/Display.js';
import SubmissionBox from '../components/SubmissionBox.js';

class MasterContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      nextUserAction: "",
      clearForm: "",
    }
  }

  submitUserAction = (event) => {
    event.preventDefault()
    console.log("b4", this.state.clearForm);
    this.setState({
      clearForm: ""
    }, () => {console.log("next action", this.state.nextUserAction})
  }

  getUserAction = (event) => {
    console.log(event.target.value);
    this.setState({
      nextUserAction: event.target.value,
      clearForm: event.target.value
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
