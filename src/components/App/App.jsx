import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';

import { ContactForm } from "../ContactForm";
import { Filter } from "../Filter";
import { ContactList } from '../ContactList';

const LOCAL_KEY = 'my-contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = ({ name, number }) => {
    const contactId = nanoid(10);

    const normalizedName = name.toLowerCase(); 
    const findedContact = contacts.find(contact => contact.name.toLowerCase().includes(normalizedName));
    if (findedContact) {
      alert(`${findedContact.name} is already in contacts`)
    } else {
      setContacts([...contacts, { id: contactId, name, number }]);
    };
  };

  const deleteContact = contactID => {
      setContacts(contacts.filter(contact => contact.id !== contactID));
    };

    const getFiltredContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContacts={addContacts}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={ev => setFilter(ev.currentTarget.value)}/>
        <ContactList contacts={getFiltredContacts()} onDeleteContact={deleteContact}/>
      </Container>
    );
  };