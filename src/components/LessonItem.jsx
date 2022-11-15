import React from 'react';
import classes from '../style/LessonItem.module.css';
import LessonBtn from './LessonBtn';

export default function LessonItem({ number, lesson, remove }) {
    return (
        <div className={classes.lesson}>
            <div className={classes.lesson__subject}>{number}. {lesson.subject}</div>
            <div className={classes.lesson__teacher}>{lesson.teacher}</div>
            <div className={classes.lesson__rating}>{lesson.rating}</div>
            <div className={classes.lesson__btns}>
                <LessonBtn bgcolor='rgb(188, 165, 165)'>Edit</LessonBtn>
                <LessonBtn onClick={() => remove(lesson)} bgcolor='rgb(230, 80, 80)'>x</LessonBtn>
            </div>
        </div>
    )
}
