import React, { Component } from 'react'

class MessageForm extends Component {

    state = {};

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Submitted');
        this.props.onSubmit(this.state);
        this.setState({ body: ''});
    }

    onChange = (event) => {
        this.setState({
            body: event.target.value
        })
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmitHandler}
                id="message-form"
                autoComplete="off">
                <input
                    type="text"
                    name="message"
                    onChange={this.onChange}
                    value={this.state.body}
                />
                <button type="submit">
                    Send
                    </button>
            </form>
        )
    }
}

export default MessageForm;