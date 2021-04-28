import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageForm from './components/MessageForm';
import Messages from './components/Messages';

class App extends Component {
  state = {
    user:{
      name:'Ivan Voronov'
    },
    messages : [
      {
        body: 'Welcome',
        author: 'Ivan Voronov',
        avatar: ''
      },
      {
        body: 'Hi',
        author: 'Slava Link',
        avatar: ''
      },
      {
        body: 'Cool!',
        author: 'Vlad Lord',
        avatar: ''
      },
    ]
  }

  sendMessage = (message) => {
    console.log(message);
    this.setState({
      messages: [
        ...this.state.messages, 
        {
          ...message, 
          author: this.state.user.name
        }
      ]
    })
    console.log('[APP] MESSAGES:',this.state.messages);
  }

  render(){

    return (
      <div id="chat">
        <Header user={this.state.user}/>
        <Messages messages={this.state.messages}/>
        <MessageForm onSubmit={this.sendMessage}/>
      </div>
    );
  }
}

export default App;
