import './App.css';

function App() {
  return (
    <div id="chat">
      <header>
        <div class="user">
          <img src="" alt="" />
          <sapan class="name">Ivan Voronov</sapan>
        </div>
        <button class="logout" onclick="logout()">Logout</button>
      </header>
      <div id="messages">
        <div class="message">
          <img src="" alt="" />
          <div class="info">
            <div class="authorName">Ivan Vo</div>
            <div class="body">Welcome</div>
            <div class="time">16:00</div>
          </div>
        </div>
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

export default App;
