import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageForm from './components/MessageForm';
import Messages from './components/Messages';

class App extends Component {
  user ={
    name:'Ivan Voronov'
  }

  messages = [
    {
      body: 'Welcome',
      authorName: 'Ivan Voronov',
      avatar: ''
    },
    {
      body: 'Hi',
      authorName: 'Slava Link',
      avatar: ''
    },
    {
      body: 'Cool!',
      authorName: 'Vlad Lord',
      avatar: ''
    },
  ]

  sendMessage = (message) => {
    console.log(message);
  }

  render(){

    return (
      <div id="chat">
        <Header user={this.user}/>
        <Messages messages={this.messages}/>
        <MessageForm onSubmit={this.sendMessage}/>
      </div>
    );
  }
}

export default App;
