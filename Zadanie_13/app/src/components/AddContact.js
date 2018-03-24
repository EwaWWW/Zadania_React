import React, {Component} from 'react';
import {connect} from 'react-redux'


const initialState = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategory: ''
};

class AddContact extends Component {

    state = initialState;

    handleChange = ({ target: {name, value}})=> {
        this.setState ({[name]: value})
        };


    handleSubmit = event => {
        event.preventDefault();

        this.props.addContact(this.state);

        this.setState(initialState)
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
                <h1> ADD CONTACT</h1>
                <form onSubmit={this.handleSubmit}>
                    Name: {this.inputRender('contactName')}
                    <br/>Phone: {this.inputRender('contactPhone')}
                    <br/> E-mail: {this.inputRender('contactEmail')}
                    <br/> Category: {this.inputRender('contactCategory')}

                    <button> ADD </button>
                </form>
            </React.Fragment>
        )
    }
}

export default connect (
    state => ({
        ...state
    }),

    dispatch =>({
        addContact:({name, phone, email, category}) =>
            dispatch({
                type: 'ADD_CONTACT',
                name,
                phone,
                email,
                category
            })
    })
)(AddContact)
