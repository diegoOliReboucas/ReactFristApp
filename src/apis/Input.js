import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <button className={styles.button} onClick={props.onClick}>
        {props.button}
      </button>
    </div>
  );
};

export default Input;
