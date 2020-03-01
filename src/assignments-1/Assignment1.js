import React from 'react';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class Assignment1 extends React.Component {
    state = {
      name: "Chilli"
    }
  
    nameChange = (newName) => {
      this.setState({
        name: newName
      })
    }

    nameHandler = (event) => {
      console.log(event);
      this.setState({
        name: event.target.value
      })
    }
  
    render() {
      return (
        <div className="App">
          <UserOutput name={this.state.name}></UserOutput>
          <UserInput 
            name={this.state.name}
            click={this.nameChange.bind(this, "Handsome")}
            changed={this.nameHandler}>
          </UserInput>
        </div>
      );
    }  
  }
  
  export default Assignment1;