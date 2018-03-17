import React from 'react';

const primaryState = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategory: ''
};

export default class AddContact extends React.Component {

    state = primaryState;

    handleChange = ({ target: {name, value}})=> {
        this.setState ({[name]: value})
        };


    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.setState(primaryState)
    };

    inputRender = fieldName => {
        return (
            <input
                name = {fieldName}
                value = {this.state[fieldName]}
                onChange = {this.handleChange}/>
        )
    };

    render (){
        return (
            <React.Fragment>
                <h1>Add Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    Name: {this.inputRender('contactName')}
                    <br/>Phone: {this.inputRender('contactPhone')}
                    <br/> E-mail: {this.inputRender('contactEmail')}
                    <br/> Category: {this.inputRender('contactCategory')}

                    <button>Add</button>
                </form>
            </React.Fragment>
        )
    }
}