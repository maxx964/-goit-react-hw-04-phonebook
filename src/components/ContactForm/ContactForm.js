import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.number) {
      alert('Please enter both name and number.');
      return;
    }

    onSubmit(formData);
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <div className={styles.wrap}>
      <h2 className={styles.h1}>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <p className={styles.p}>Name</p>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="First or last name"
            required
            value={name}
            onChange={handleChange}
            autoComplete="name"
          />
        </label>
        <p className={styles.p}>Number</p>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="tel"
            name="number"
            placeholder="Phone Number"
            required
            value={number}
            onChange={handleChange}
            autoComplete="tel"
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
