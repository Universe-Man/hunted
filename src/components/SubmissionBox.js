import React from 'react';
import '../assets/SubmissionBox.css';

class SubmissionBox extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <form onSubmit={this.props.submitUserAction} onChange={this.props.getUserAction}>
        <input id="user-input" type="text" name="user-action" autoFocus="autofocus" defaultValue=""></input>
      </form>
    )
  }
}

export default SubmissionBox;
