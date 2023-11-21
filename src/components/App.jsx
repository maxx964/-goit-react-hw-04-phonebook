import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { saveDataToLocalStorage, loadDataFromLocalStorage } from './localStorageUtil/localStorageUtil';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = loadDataFromLocalStorage('contacts');
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  const handleSubmit = ({ name, number }) => {
    if (contacts.some((contact) => contact.name === name)) {
      alert(`"${name}" is already in the list`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
    saveDataToLocalStorage('contacts', [...contacts, newContact]);
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    saveDataToLocalStorage('contacts', updatedContacts);
  };

  return (
    <div>
      <ContactForm onSubmit={handleSubmit} />
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        filter={filter}
      />
    </div>
  );
};

export default App;
