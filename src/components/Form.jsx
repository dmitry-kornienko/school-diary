import React, { useState } from 'react';
import FormInput from './FormInput';
import FormBtn from './FormBtn';
import classes from '../style/Form.module.css';
import { useLessons } from './LessonsContext';

export default function Form() {
    const { createLesson } = useLessons();

    const [lesson, setLesson] = useState({ subject: '', teacher: '' })

    const addNewLesson = (e) => {
        e.preventDefault();
        const newLesson = {
            ...lesson, id: Date.now(), rating: 0
        };
        createLesson(newLesson);
        setLesson({subject: '', teacher: ''}); 
    }

    return (
        <form className={classes.form}>
            <FormInput
                value={lesson.subject}
                onChange={e => setLesson({...lesson, subject: e.target.value})}
                placeholder="Enter your Subject"
            />
            <FormInput
                value={lesson.teacher}
                onChange={e => setLesson({...lesson, teacher: e.target.value})}
                placeholder="Enter your Teacher"
            />
            <FormBtn onClick={addNewLesson}>Add Subject</FormBtn>
        </form>
    )
}
