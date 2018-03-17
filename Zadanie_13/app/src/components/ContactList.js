import React from 'react';

export default class ContactList extends React.Component {

    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId)
    };

    render(){

        const {contacts} = this.props;

        return (
            <React.Fragment>
                <ul>
                    { contacts.map( contact => {

                    return (
                        <li key = {contact.id}>
                            <strong>{contact.name}</strong>
                            <br/>{contact.phone}, {contact.email}<br/>
                            {contact.category}<br/>
                            <button onClick={this.handleRemoveClick}>remove</button>
                        </li>
                    )
                })}
                </ul>
            </React.Fragment>
        )
    }
}