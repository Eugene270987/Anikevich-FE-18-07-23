import './ContactList.scss'
import Contact from '../Contact/Contact';

function ContactList({ contacts }) {
    return (
        <div>
            <h1 className="contact__title">Contacts</h1>
            {contacts.map(contact => (
                <Contact key={contact.name} contact={contact} />
            ))}
        </div>
    );
}

export default ContactList;



