import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';

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
  render(){

    return (
      <div id="chat">
        <Header user={this.user}/>
        <div id="messages">
          <Message message={this.messages[0]}/>
          <Message message={this.messages[1]}/>
          <Message message={this.messages[2]}/>
        </div>
        <form id="message-form" autocomplete="off">
          <input type="text" name="message" />
          <button type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default App;
