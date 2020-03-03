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

    deleteHandler = (index) => {
      const oldText = this.state.text;
      const newTest = oldText.substr(0, index) + oldText.substr(index+1, oldText.length);
      this.setState({
        text: newTest,
        length: newTest.length
      })
    }
  
    render() {
      return (
        <div className="App">
          <div>
            <input 
              type="text"
              value={this.state.text}
              onChange={this.textChange}/>
            <p>Length of text is {this.state.length}</p>
          </div>
          <div>
            <Validation textLength={this.state.length}/>
          </div>
          <div>
            <CharList 
              text={this.state.text}
              deleted={this.deleteHandler}/>
          </div>
        </div>
      );
    }  
  }
  
  export default Assignment2;