import React from 'react';
import { useParams } from 'react-router-dom';
import classes from '../style/Header.module.css';

export default function MarksHeader() {
  const params = useParams();
  return (
    <div className={classes.header}>{params.subject}</div>
  )
}
