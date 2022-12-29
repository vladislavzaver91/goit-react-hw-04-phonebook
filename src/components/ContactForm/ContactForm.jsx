import { useState } from 'react';

import { PropTypes } from 'prop-types';
import { FormBox, Form, FormTitle, SearchInput, BtnSubmit } from './ContactForm.styled';

export const ContactForm = ({ addContacts }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = ev => {
        const { name, value } = ev.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        };
    };

    const handleSubmit = ev => {
        ev.preventDefault();
        addContacts({ name, number });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <FormBox>
            <Form onSubmit={handleSubmit}>
                <FormTitle> Name
                    <SearchInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </FormTitle>
                <FormTitle> Number
                    <SearchInput
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </FormTitle>
                <BtnSubmit type="submit">Add contacts</BtnSubmit>
            </Form>
            </FormBox>
    )
};

ContactForm.propTypes = {
    addContacts: PropTypes.func.isRequired,
};