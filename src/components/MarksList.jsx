import React from 'react';
import MarkItem from './MarkItem';
import classes from '../style/MarksList.module.css';
import { useLessonPage } from './LessonPageContext';

export default function MarksList() {
  const { marks, removeMark, saveEditMark } = useLessonPage();
  return (
    <div className={classes.markList}>
        {marks.map((mark, index) => 
          <MarkItem mark={mark} number={index + 1} remove={removeMark} saveEdit={saveEditMark} key={mark.id} />)}
    </div>
  )
}
