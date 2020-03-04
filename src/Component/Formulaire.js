import React, { Component } from 'react';

class Formulaire extends Component {
    state = {
        message : ''
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.createMessage();

    }
    createMessage = () =>{
        const {addMessage, Pseudo } = this.props
        const message = { 
            Pseudo,
            message : this.state.message
        }
        addMessage(message)
        this.setState({ message: '' })
    }
    addMessage
    handleChange = event =>{
        const message = event.target.value
        this.setState({message})
    }
    render() {
        return (
            <div>
            <form className="form" onSubmit = {this.handleSubmit}>
                <textarea 
                onChange = {this.handleChange}
                value = {this.state.message}
                rows="5"
                cols="33"
                required
                maxLength="140"
                />
                <div className="info">
                    14
                </div>
                <button type="submit">
                    Envoyer !!!
                </button>

            </form>
            </div>
        );
    }
}

export default Formulaire;