import React from 'react';
import classes from '../style/FormBtn.module.css';

export default function FormBtn({ children, ...props }) {
  return (
    <button {...props} className={classes.formBtn}>{children}</button>
  )
}
