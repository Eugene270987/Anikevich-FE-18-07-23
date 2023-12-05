import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addItem, contactsAdapter, deleteItem, fetchContacts} from "../../store/contacts/contactSlice";


function App() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => contactsAdapter.getSelectors().selectAll(state.contacts));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleContactAdd = (newContact) => {
        dispatch(addItem(newContact));
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteItem(contactId));
    };

    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ContactForm" element={<ContactForm onAddContact={handleContactAdd} />} />
                    <Route
                        path="/ContactList"
                        element={contacts && contacts.length ? (
                            <ContactList contacts={contacts} onDelete={handleDeleteContact} />
                        ) : (
                            <h1 className="no-contact__title">No contacts yet...</h1>
                        )}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;