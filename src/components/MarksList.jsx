import React from 'react';
import MarkItem from './MarkItem';
import classes from '../style/MarksList.module.css';

export default function MarksList({ marks }) {
  return (
    <div className={classes.markList}>
      {marks.map((mark, index) => 
        <MarkItem mark={mark} number={index + 1} key={mark.id} />)}
    </div>
  )
}
