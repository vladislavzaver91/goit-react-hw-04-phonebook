import { PropTypes } from 'prop-types';
import React, { Component } from "react";
import { FormBox, Form, FormTitle, SearchInput, BtnSubmit } from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = ev => {
        const { name, value } = ev.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = ev => {
        ev.preventDefault();
        
        this.props.onSubmit(this.state);
        this.props.addContacts(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        const { name, number } = this.state;

        return(
            <FormBox>
            <Form onSubmit={this.handleSubmit}>
                <FormTitle> Name
                    <SearchInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </FormTitle>
                <BtnSubmit type="submit">Add contacts</BtnSubmit>
            </Form>
            </FormBox>
        )
    }
}

ContactForm.propTypes = {
    state: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
};