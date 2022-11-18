import React, { useState } from 'react';
import LessonBtn from './LessonBtn';
import classes from '../style/MarkItem.module.css';
import FormInput from './FormInput';
import Select from './Select';

export default function MarkItem({ mark, number, add, remove, saveEdit }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [dateValue, setDateValue] = useState(mark.date);
  const [valueValue, setValueValue] = useState(mark.value);

  const editMarkFunc = () => {
      if (!isEditMode) {
          setIsEditMode(true)
      }
  }
  const handleSave = () => {
      const editedMark = {
          id: mark.id,
          date: dateValue,
          value: valueValue,
      }
      setIsEditMode(false)
      saveEdit(editedMark, mark.id);
  }
  return (
    <div className={classes.markItem}>
      {!isEditMode &&
        (<>
          <div>{number}</div>
          <div>{mark.date}</div>
          <div>{mark.value}</div>
          <div className={classes.markItem__btns}>
            <LessonBtn onClick={editMarkFunc} bgcolor='rgb(188, 165, 165)'>Edit</LessonBtn>
            <LessonBtn onClick={() => remove(mark)} bgcolor='rgb(230, 80, 80)'>x</LessonBtn>
          </div>
        </>)
      }
      {isEditMode &&
        (<>
          <FormInput
            type='date'
            value={mark.date}
            onChange={(e) => setDateValue(e.target.value)}   
          />
          <Select
            value={mark.value}
            onChange={(e) => setValueValue(e.target.value)}   
          />
          <LessonBtn onClick={handleSave} bgcolor='rgb(188, 165, 165)'>Save</LessonBtn>
        </>)
      }
    </div>
  )
}
