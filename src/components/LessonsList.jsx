import React from 'react';
import LessonItem from './LessonItem';
import classes from '../style/LessonsList.module.css';

export default function LessonsList({ lessons, remove }) {
  return (
    <div className={classes.lessonsList}>
        {lessons.map((lesson, index) =>
            <LessonItem remove={remove} number={index + 1} lesson={lesson} key={lesson.id} />)}
    </div>
  )
}
