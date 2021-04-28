import React, { Component } from 'react'

class MessageForm extends Component {

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Submitted');
        let body = 'Let my people go!';
        this.props.onSubmit({
            body: body
        })
    }

    render() {
        return (
            <form  
                onSubmit={this.onSubmitHandler}
                id="message-form" 
                autoComplete="off">
                    <input type="text" name="message" />
                    <button type="submit">
                        Send
                    </button>
            </form>
        )
    }
}

export default MessageForm;