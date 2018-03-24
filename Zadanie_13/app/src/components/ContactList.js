import React,{Component} from 'react';
import {connect} from 'react-redux'

class ContactList extends Component {

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
                            {contact.category.map((contact) =>{
                                return (<span>[{(contact)}]</span>)
                            })}<br/>
                            <button data-contact-id={contact.id}
                                    onClick={[() => this.props.remove(contact.id)]}>
                                remove
                            </button>
                        </li>
                    )
                })}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateProps = state => ({ contacts: state.contacts.data});

const mapDispatchProps = dispatch => ({ remove: id=> dispatch({type:'REMOVE', id})});

export default connect ( mapDispatchProps, mapStateProps)(ContactList)