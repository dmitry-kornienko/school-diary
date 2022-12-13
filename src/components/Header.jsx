import React from 'react';
import classes from '../style/Header.module.css';

export default function Header({ children }) {
  return (
    <div className={classes.header}>{children}</div>
  )
}
