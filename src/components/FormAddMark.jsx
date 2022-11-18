import React, { useState } from 'react'
import FormBtn from './FormBtn'
import FormInput from './FormInput'
import Select from './Select'

export default function FormAddMark({ createMark }) {
  const [mark, setMark] = useState({ date: '', value: 5 });

  const addNewMark = (e) => {
    // e.preventDefault();
    const newMark = {
        ...mark, id: Date.now()
    };
    createMark(newMark);
    setMark({date: '', value: 5}); 
}
  return (
    <div className='pageLesson__content'>
        <FormInput
          type='date'
          value={mark.date}
          onChange={(e) => setMark({...mark, date: e.target.value})}   
        />
        <Select
          value={mark.value}
          onChange={(e) => setMark({...mark, value: e.target.value})}   
        />
        <FormBtn onClick={addNewMark}>Add Mark</FormBtn>
    </div>
  )
}
