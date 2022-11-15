import React from 'react';
import classes from '../style/LessonBtn.module.css';

export default function LessonBtn({ children, onClick, bgcolor }) {
  return (
    <button onClick={onClick} className={classes.lesson__btn} style={{backgroundColor: bgcolor}}>{children}</button>
  )
}
