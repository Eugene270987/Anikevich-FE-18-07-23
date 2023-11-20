import './ContactForm.scss';
import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
function ContactForm ({onAddContact}) {
    const nameRef = useRef('');
    const userNameRef = useRef('');
    const phoneNumberRef = useRef('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSaveContact = () => {
        const name = nameRef.current.value;
        const username = userNameRef.current.value;
        const phone = phoneNumberRef.current.value;

        if (!name || !username || !phone) {
            setError('Please fill all the fields below!!!');
            return;
        }

        setError('');

        onAddContact({
            name,
            username,
            phone,
        });

        navigate('/ContactList');
    }

    const handleCancel = () => {
        navigate('/ContactList');
    };

    return (
        <form className="form">
            <fieldset className="form__inner">
                <legend className="form__title">Fill in the following form</legend>
                {error && <p className="error__message">{error}</p>}
                <div className="input__wrapper">
                    <label className="input__label" htmlFor="name">Name:</label>
                    <input type="text" ref={nameRef} id="name"/>
                </div>
                <div className="input__wrapper">
                    <label className="input__label" htmlFor="username">Username:</label>
                    <input type="text" ref={userNameRef} id="username"/>
                </div>
                <div className="input__wrapper">
                    <label className="input__label" htmlFor="number">Phone Number:</label>
                    <input type="text" ref={phoneNumberRef} id="number"/>
                </div>
                <div className="button__wrapper">
                    <button className="btn-cancel" type="button" onClick={handleCancel}>Cancel</button>
                    <button className="btn-save" type="button" onClick={handleSaveContact}>Save</button>
                </div>
            </fieldset>
        </form>
    )
}

export default ContactForm;