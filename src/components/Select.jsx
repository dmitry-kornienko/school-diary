import React from 'react';
import classes from '../style/Select.module.css';

export default function Select({ value, set }) {
  const handleChangeValue = (event) => {
    set(event.target.value)
  }
  return (
    <select value={value} onChange={handleChangeValue} className={classes.select}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
    </select>
  )
}
