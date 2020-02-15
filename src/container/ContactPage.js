import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addContact, editContact } from '../actions';
import ContactTable from '../components/Table.js';
import ContactForm from '../components/Form.js';


const ContactContainer = styled.div`
    width: 100%;
    display: flex;
`;


export const ContactPage = (props) => {
    const { contacts, addContactAction, editContactAction } = props;
    const [contactForm, setContactForm] = useState({
        isOpen: true,
        data: { fullName: 'Zyaan', company: "", email: "", address: "", phone: "" }
    });

    useEffect(() => {

    }, [contacts])

    const submitForm = (values) => {
        addContactAction(values)
    }
    const onSelect = (contact) => {
        setContactForm(contact)
    }
    return (
        <ContactContainer>
            <ContactTable data={contacts} onSelect={onSelect} />
            <ContactForm data={contactForm.data} submitForm={submitForm} />
        </ContactContainer>
    );
};


const mapStateToProps = state => {
    return {
        contacts: state.contacts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addContactAction: (contact) => dispatch(addContact(contact)),
        editContactAction: (contact) => dispatch(editContact(contact))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);