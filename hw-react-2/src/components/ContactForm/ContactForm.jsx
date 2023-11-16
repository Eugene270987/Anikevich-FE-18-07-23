import './ContactForm.scss';
import {useRef} from 'react';
import {useNavigate} from "react-router-dom";
function ContactForm ({onAddContact}) {
    const nameRef = useRef('');
    const userNameRef = useRef('');
    const phoneNumberRef = useRef('');

    const navigate = useNavigate();

    const handleSaveContact = () => {
        onAddContact({
            name: nameRef.current.value,
            username: userNameRef.current.value,
            phone: phoneNumberRef.current.value
        })

        navigate('/ContactList');
    }

    const handleCancel = () => {
        navigate('/ContactList');
    };

    return (
        <form className="form">
            <fieldset className="form__inner">
                <legend className="form__title">Fill in the following form</legend>
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