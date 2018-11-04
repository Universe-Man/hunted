import React from 'react';
import '../assets/Display.css';

class Display extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <textarea id="text-display" value={this.props.textDisplayValue} />
    )
  }
}

export default Display;
