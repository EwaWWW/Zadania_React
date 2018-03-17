import React from 'react';

import ContactList from './ContactList';
import AddContact from "./AddContact";

export default class Contacts extends React.Component {

     state ={
        contacts: [
            {id: '1', name: 'Ewa', phone: '555-555-555',email: 'ewa@xp.pl', category: 'praca'},
            {id: '2', name: 'Justyna', phone: '444-444-444',email: 'justyna@xp.pl', category: 'praca'},
            {id: '3', name: 'Monika', phone: '333-333-333',email: 'monika@xp.pl', category: 'rodzina'},
            {id: '4', name: 'Ola', phone: '222-222-222',email: 'ola@xp.pl', category: 'rodzina'}
        ],
    };


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
                <ContactList
                    contacts={this.state.contacts}
                    removeContact = {this.removeContact}/>
                <AddContact addContact = {this.addContact}/>

            </React.Fragment>
        )
    }
}
