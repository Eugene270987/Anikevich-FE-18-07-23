import './ContactList.scss'
import Contact from '../Contact/Contact';


function ContactList({contacts, onDelete}) {


    return (
        <div>
            <h1 className="contact__title">Contacts</h1>
            {contacts.map(contact => (<Contact key={contact.name} contact={contact} onDeleteContact={onDelete}></Contact>))}
        </div>
    );
}

export default ContactList;



