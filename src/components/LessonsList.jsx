import React, { useContext } from 'react';
import LessonItem from './LessonItem';
import classes from '../style/LessonsList.module.css';
import { ContextLessons } from './context';

export default function LessonsList() {
  const { lessons } = useContext(ContextLessons);

  return (
    <div className={classes.lessonsList}>
        {lessons.map((lesson, index) =>
            <LessonItem number={index + 1} lesson={lesson} key={lesson.id} />)}
    </div>
  )
}
