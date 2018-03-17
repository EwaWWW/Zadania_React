import React from 'react';
import {connect} from 'redux'

import ContactList from './ContactList';
import AddContact from "./AddContact";

class Contacts extends React.Component {

     state ={
        contacts: [
            {id: '1', name: 'Ewa', phone: '555-555-555',email: 'ewa@xp.pl', category: 'praca'},
            {id: '2', name: 'Justyna', phone: '444-444-444',email: 'justyna@xp.pl', category: 'praca'},
            {id: '3', name: 'Monika', phone: '333-333-333',email: 'monika@xp.pl', category: 'rodzina'},
            {id: '4', name: 'Ola', phone: '222-222-222',email: 'ola@xp.pl', category: 'rodzina'}
        ],
    };

    updateContact = (contactId, updatedContact) => {
        this.setState({
            contacts: this.state.contacts.map(
                contact =>
                    contact.id !== contactId
                        ? contact
                        : {
                            ...contact,
                            ...updatedContact
                        }
            )
        })
    }

    addContact = ({contactName, contactPhone, contactEmail, contactCategory}) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                name: contactName,
                phone: contactPhone + ',',
                email: contactEmail,
                category: contactCategory
            })
        })
    };


    removeContact = contactId => {
        this.setState ({
            contacts: this.state.contacts.filter(contact =>
                contact.id !== contactId)
        })
    };



    render(){
        return(
            <React.Fragment>
                <h1> CONTACTS </h1>
                <AddContact addContact = {this.addContact}/>
                <ContactList
                    contacts={this.state.contacts}
                    updateContact = {this.updateContact}
                    removeContact = {this.removeContact}/>

            </React.Fragment>
        )
    }
}

export default connect (state => ({
    contacts: state.contacts.data
}))(Contacts)
