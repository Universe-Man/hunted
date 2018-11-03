import React from 'react';

class SubmissionBox extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <form onSubmit={this.props.submitUserAction} onChange={this.props.getUserAction}>
        <input id="user-input" type="text" name="user-action" autoFocus="autofocus" value={this.props.state.clearForm}></input>
      </form>
    )
  }
}

export default SubmissionBox;
