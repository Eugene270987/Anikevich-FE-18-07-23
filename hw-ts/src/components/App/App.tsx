import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, contactsAdapter, deleteContact, fetchContacts } from '../../store/contacts/contactSlice';
import { ContactType } from '../Contact/Contact';
import {store} from "../../index";

type RootState = ReturnType<typeof store.getState>;

const App: React.FC = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state: RootState) => contactsAdapter.getSelectors().selectAll(state.contacts) as ContactType[]);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleContactAdd = (newContact: ContactType) => {
        dispatch(addContact(newContact));
    };

    const handleDeleteContact = (contactId: number) => {
        dispatch(deleteContact(contactId));
    };

    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/ContactForm"
                        element={<ContactForm onAddContact={handleContactAdd} />}
                    />
                    <Route
                        path="/ContactList"
                        element={
                            contacts && contacts.length ? (
                                <ContactList contacts={contacts} onDelete={handleDeleteContact} />
                            ) : (
                                <h1 className="no-contact__title">No contacts yet...</h1>
                            )
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;