import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.wrap}> 
    <div className={styles.filter}>
      <h2 className={styles.h2}>Contacts</h2>
      <h3 className={styles.h3}>Find contacts by name</h3>
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Enter first or last name"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default Filter;
