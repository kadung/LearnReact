import React from 'react';
import Validation from './Validation';
import CharList from './CharList';

class Assignment2 extends React.Component {
    state = {
      text: '',
      length: 0,
    }
  
    textChange = (event) => {
      const value = event.target.value;
      this.setState({
        text: value,
        length: value.length
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
          <div>
            <CharList text={this.state.text}></CharList>
          </div>
        </div>
      );
    }  
  }
  
  export default Assignment2;