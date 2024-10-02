import React from 'react';
import Styles from './Input.module.css';

const Input = ({ type, ID, label, placeholder, value, onChange }) => {
  return (
    <div className={`${Styles.InputContainer} flex column`}>
      <label htmlFor={ID}>{label}</label>
      <input type={type} id={ID} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
}

export default Input;
