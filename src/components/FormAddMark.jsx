import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormBtn from './FormBtn'
import FormInput from './FormInput'
import { useLessons } from './LessonsContext'
import Select from './Select'

export default function FormAddMark() {
  const { lessons, createMark } = useLessons();
  const [date, setDate] = useState('');
  const [mark, setMark] = useState(5);

  const params = useParams();

  const addNewMark = (e) => {

    const indexCurrentLesson = lessons.findIndex(lesson => lesson.subject === params.subject);

    const newMark = {
      date,
      markValue: Number(mark),
      id: Date.now(),
    };
    createMark(newMark, indexCurrentLesson);
    setMark(5); 
    setDate('');
  }
  
  return (
    <div className='pageLesson__content'>
        <FormInput
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}   
        />
        <Select
          set={setMark}
          value={mark}
        />
        <FormBtn onClick={addNewMark}>Add Mark</FormBtn>
    </div>
  )
}
