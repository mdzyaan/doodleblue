import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addContact, editContact } from '../actions';
import ContactTable from '../components/Table.js';
import ContactForm from '../components/ContactForm.js';
import DisplayInfo from '../components/DisplayInfo.js';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';


const ContactContainer = styled.div`
    width: 100%;
    display: flex;
`;


export const ContactPage = (props) => {
    const { contacts, addContactAction, editContactAction } = props;
    const [contactForm, setContactForm] = useState({
        isOpen: false,
        data: { fullName: 'Zyaan', company: "", email: "", address: "", phone: ""}
    });
    const [displayInfo, setDisplayInfo] = useState(contacts[0]);

    const newForm = (isOpen) => setContactForm({ isOpen, data: { fullName: '', company: "", email: "", address: "", phone: "" } })
    const submitForm = (values) => {
        if (values.id) {
            editContactAction(values);
            setDisplayInfo(values);
        } else {
            addContactAction({ ...values, id: uuidv4() });
            setDisplayInfo({ ...values, id: uuidv4() });
        }
        newForm(false);
        
    }
    const onSelect = (contact) => {
        setContactForm({isOpen: false, data: contact})
        setDisplayInfo(contact);
    }
    const onEdit = (contact) => {
        setContactForm({isOpen: true, data: contact})
    }
    const contactsForm = React.useMemo(() => {
        return <ContactForm data={contactForm.data} submitForm={submitForm} />
    }, [contactForm])
    return (
    <div>
        <Button onClick={() => newForm(true)}>Add contact</Button>
        <ContactContainer>
            
            <ContactTable data={contacts} onSelect={onSelect} />
                {!contactForm.isOpen ? <DisplayInfo data={displayInfo} onEdit={onEdit} /> : (contactsForm)}
        </ContactContainer>
        </div>
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