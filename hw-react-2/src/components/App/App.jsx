import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../store/contacts/action';

function App() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.data);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                data.forEach((contact) => dispatch(addContact(contact)));
            });
    }, [dispatch]);

    const handleContactAdd = (newContact) => {
        dispatch(addContact(newContact));
    };

    const handleDeleteContact = (contactName) => {
        dispatch(deleteContact(contactName));
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
                        element={
                            !!contacts.length ? (
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
}

export default App;