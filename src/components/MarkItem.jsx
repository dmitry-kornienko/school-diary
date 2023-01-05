import React, { useState } from 'react';
import LessonBtn from './LessonBtn';
import classes from '../style/MarkItem.module.css';
import FormInput from './FormInput';
import Select from './Select';
import { useLessons } from './LessonsContext';
import { useParams } from 'react-router-dom';

export default function MarkItem({ mark, number }) {
  const { removeMark, saveEditMark, lessons } = useLessons();
  const [isEditMode, setIsEditMode] = useState(false);
  const [dateValue, setDateValue] = useState(mark.date);
  const [markValue, setMarkValue] = useState(mark.markValue);
  const params = useParams();
  const lessonIndex = lessons.findIndex(lesson => lesson.subject === params.subject);

  const editMarkFunc = () => {
    if (!isEditMode) {
      setIsEditMode(true);
    }
  }
  const handleSave = () => {
    const editedMark = {
      id: mark.id,
      date: dateValue,
      markValue: markValue,
    }
    setIsEditMode(false);
    saveEditMark(editedMark, lessonIndex);
  }
  return (
    <div className={classes.markItem}>
      {!isEditMode &&
        (<>
          <div>{number}</div>
          <div>{mark.date}</div>
          <div>{mark.markValue}</div>
          <div className={classes.markItem__btns}>
            <LessonBtn onClick={editMarkFunc} bgcolor='rgb(188, 165, 165)'>Edit</LessonBtn>
            <LessonBtn onClick={() => removeMark(mark, lessonIndex)}  bgcolor='rgb(230, 80, 80)'>x</LessonBtn>
          </div>
        </>)
      }
      {isEditMode &&
        (<>
          <FormInput
            type='date'
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)} 
          />
          <Select
            set={setMarkValue}
            value={markValue}
          />
          <LessonBtn onClick={handleSave} bgcolor='rgb(188, 165, 165)'>Save</LessonBtn>
        </>)
      }
    </div>
  )
}
