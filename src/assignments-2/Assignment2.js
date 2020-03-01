import React from 'react';
import Validation from './Validation';

class Assignment2 extends React.Component {
    state = {
      length: 0
    }
  
    textChange = (event) => {
      const textLength = event.target.value.length;
      this.setState({
        length: textLength
      })
    }
  
    render() {
      return (
        <div className="App">
          <div>
            <input type="text" onChange={this.textChange}></input>
            <p>Length of text is {this.state.length}</p>
          </div>
          <div>
            <Validation textLength={this.state.length}></Validation>
          </div>
        </div>
      );
    }  
  }
  
  export default Assignment2;