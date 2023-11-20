import './ContactForm.scss';
import {Fragment} from 'react';
import {useNavigate} from "react-router-dom";
import {useFormik} from 'formik';
import {string, object} from 'yup';

const formElementsConfig = {
    name: {
        defaultValue: '',
        inputType: 'text',
        placeholder: 'Enter your name',
        labelText: 'Name',
        vSchema: string()
            .min(5, 'Your Name is too short!')
            .max(15, 'Your Name is too long')
            .required('Name required!'),
    },
    username: {
        defaultValue: '',
        inputType: 'text',
        placeholder: 'Enter your username',
        labelText: 'Username',
        vSchema: string()
            .min(5, 'Your Username is too short!')
            .max(15, 'Your Username is too long')
            .required('Username required!'),
    },
    phone: {
        defaultValue: '',
        inputType: 'text',
        placeholder: '0671234567',
        labelText: 'Phone Number',
        vSchema: string()
            .length(10, 'Please, enter correct phone number!')
            .required('Phone number required!'),
    },
}

function getInitialValues () {
    let initialValues = {};
    for (let key of Object.keys(formElementsConfig)) {
        initialValues[key] = formElementsConfig[key].defaultValue;
    }
    return initialValues;
}

function getValidationSchema () {
    let objWithSchemas = {};
    for (let key of Object.keys(formElementsConfig)) {
        objWithSchemas[key] = formElementsConfig[key].vSchema;
    }
    return object(objWithSchemas);
}

function ContactForm ({onAddContact}) {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        onSubmit: values => {
            onAddContact (values);
            navigate('/ContactList');
        }
    })

    const generateFormElements = () => {
        const formItems = [];
        for (let key of Object.keys(formElementsConfig)) {
            const { labelText, inputType, placeholder } = formElementsConfig[key];

            formItems.push((
                <Fragment key={key}>
                    <div className="input__wrapper">
                        <label className="input__label" htmlFor={key}>{labelText}</label>
                        <input type={inputType} id={key} name={key} value={formik.values[key]} onChange={formik.handleChange} placeholder={placeholder}/>
                        {formik.errors[key] && <p className="error">{formik.errors[key]}</p>}
                    </div>
                </Fragment>
            ))
        }

        return (
            <fieldset className="form__inner">
                <legend className="form__title">Fill in the following form</legend>
                {formItems}
                <div className="button__wrapper">
                    <button className="btn-cancel" type="button" onClick={handleCancel}>Cancel</button>
                    <button className="btn-save" type="button" onClick={formik.handleSubmit}>Save</button>
                </div>
            </fieldset>
        )
    }


    const handleCancel = () => {
        navigate('/ContactList');
    };

    return (
        <form className="form">
            {generateFormElements()}
        </form>
    )
}

export default ContactForm;