import React from 'react';
import Display from '../components/Display.js';
import SubmissionBox from '../components/SubmissionBox.js';

class MasterContainer extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div id="master-container">
        <Display />
        <SubmissionBox />
      </div>
    )
  }
}

export default MasterContainer;
