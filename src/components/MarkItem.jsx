import React, { useState } from 'react';
import LessonBtn from './LessonBtn';
import classes from '../style/MarkItem.module.css';
import FormInput from './FormInput';
import Select from './Select';
import { useLessonPage } from './LessonPageContext';

export default function MarkItem({ mark, number }) {
  const { removeMark, saveEditMark } = useLessonPage();
  const [isEditMode, setIsEditMode] = useState(false);
  const [dateValue, setDateValue] = useState(mark.date);
  const [markValue, setMarkValue] = useState(mark.markValue);

  const editMarkFunc = () => {
      if (!isEditMode) {
          setIsEditMode(true)
      }
  }

  const handleSave = () => {
      const editedMark = {
          id: mark.id,
          date: dateValue,
          markValue: markValue,
      }
      setIsEditMode(false)
      saveEditMark(editedMark, mark.id);
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
            <LessonBtn onClick={() => removeMark(mark)} bgcolor='rgb(230, 80, 80)'>x</LessonBtn>
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
