import React, { useState } from 'react'
import FormBtn from './FormBtn'
import FormInput from './FormInput'
import Select from './Select'

export default function FormAddMark({ createMark }) {
  const [date, setDate] = useState('');
  const [mark, setMark] = useState(5);

  const addNewMark = (e) => {
    const newMark = {
      date,
      markValue: mark,
      id: Date.now(),
    };
    createMark(newMark);
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
