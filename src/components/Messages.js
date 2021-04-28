import React from 'react'

import Message from './Message';

const Messages = (props) => {
    return (
        <div id="messages">
          { 
            props.messages.map((m, i) => <Message key={i} message={m} />)        
          }
        </div>
    )
}
export default Messages;
