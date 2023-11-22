import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import {useEffect, useState} from 'react';

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setContacts(data));
    }, []);

    const handleContactAdd = (newContact) => {
        setContacts([
            ...contacts,
            newContact
        ])
    };

    const handleDeleteContact = (contactName) => {
        const newContacts = contacts.filter(contact => contact.name !== contactName)
        setContacts(newContacts);
    }

    return (
        <div>
            <Router>
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/ContactForm" element={<ContactForm onAddContact={handleContactAdd} />}/>
                    <Route path="/ContactList" element={!!contacts.length ? <ContactList contacts={contacts} onDelete={handleDeleteContact}/> : <h1 className="no-contact__title">No contacts yet...</h1>}/>
                </Routes>
            </Router>
        </div>
  );
}

export default App;
