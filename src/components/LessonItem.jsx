import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style/LessonItem.module.css';
import FormInput from './FormInput';
import LessonBtn from './LessonBtn';
import { useLessons } from './LessonsContext';

export default function LessonItem({ number, lesson }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [subjectValue, setSubjectValue] = useState(lesson.subject);
    const [teacherValue, setTeacherValue] = useState(lesson.teacher);
    const { removeLesson, saveEditLesson } = useLessons();
    const editLessonFunc = () => {
        if (!isEditMode) {
            setIsEditMode(true);
        }
    }
    const handleSave = () => {
        if (subjectValue && teacherValue) {
            const editedLesson = {
                id: lesson.id,
                subject: subjectValue,
                teacher: teacherValue,
                rating: lesson.rating,
                marks: lesson.marks,
            }
            setIsEditMode(false);
            saveEditLesson(editedLesson, lesson.id);
        }
    }
    
    return (
        <div className={classes.lesson}>
            {!isEditMode && 
                (<>
                    <div className={classes.lesson__subject}>
                        <Link to={`/lessons/${lesson.subject}`}>{number}. {lesson.subject}</Link>
                    </div>
                    <div className={classes.lesson__teacher}>{lesson.teacher}</div>
                    <div className={classes.lesson__rating}>{lesson.rating}</div>
                    <div className={classes.lesson__btns}>
                        <LessonBtn onClick={editLessonFunc} bgcolor='rgb(188, 165, 165)'>Edit</LessonBtn>
                        <LessonBtn onClick={() => removeLesson(lesson)} bgcolor='rgb(230, 80, 80)'>x</LessonBtn>
                    </div>
                </>)
            }
            {isEditMode &&
                (<>
                    <div className="editLessonBlock">
                        <FormInput
                            value={subjectValue}
                            onChange={(e) => setSubjectValue(e.target.value)}
                        />
                        <FormInput
                            value={teacherValue}
                            onChange={(e) => setTeacherValue(e.target.value)}
                        />
                        <LessonBtn onClick={handleSave} bgcolor='rgb(188, 165, 165)'>Save</LessonBtn>
                    </div>
                </>)
            }
        </div>
    )
}
