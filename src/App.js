import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Message from './components/Message';

class App extends Component {
  user ={
    name:'Ivan Voronov'
  }
  render(){

    return (
      <div id="chat">
        <Header user={this.user}/>
        <div id="messages">
          <Message/>
          <div class="message">
            <img src="" alt="" />
            <div class="info">
              <div class="authorName">Petia Som</div>
              <div class="body">Hello</div>
              <div class="time">16:03</div>
            </div>
          </div>
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
