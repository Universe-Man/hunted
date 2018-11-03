import React from 'react';

class SubmissionBox extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div>
      <form onSubmit={this.getUserAction}>
        <input id="user-input" type="text" name="user-action"></input>
      </form>

      </div>
    )
  }
}

export default SubmissionBox;
