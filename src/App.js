import React, { Component } from 'react';
import './App.css';
import Formulaire from './Component/Formulaire';
import Message from './Component/Message';
class App extends Component {
  state = {
    messages : {},
    pseudo : this.props.match.params.pseudo
  }
  addMessage = message =>{
    const messages = {...this.state.message}
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })

  }
  render() {
    return (
      <div className = "container">
        <Message/>
        <Formulaire 
        pseudo ={this.state.pseudo }
        addMessage = { this.addMessage }/>
        
      </div>
    );
  }
}

export default App;

