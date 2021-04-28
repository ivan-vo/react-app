import React from 'react';

export default ({ message }) => {

    return(
        <div className="message">
            <img src="" alt="" />
            <div className="info">
              <div className="authorName">{message.author}</div>
              <div className="body">{message.body}</div>
              <div className="time">16:00</div>
            </div>
          </div>
    )
}