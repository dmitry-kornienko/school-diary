import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/App.css';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import FormAddMark from '../../components/FormAddMark';
import MarksList from '../../components/MarksList';
import BackArrow from '../../components/BackArrow';

export function LessonPage() {
  const [marks, setMarks] = useState([
    {id: 1, date: '2022-03-18', markValue: 4},
    {id: 2, date: '2022-03-19', markValue: 5},
    {id: 3, date: '2022-03-20', markValue: 3},
  ]);

  const createMark = (newMark) => {
    setMarks([...marks, newMark])
  };
  const removeMark = (mark) => {
    setMarks(marks.filter((l) => l.id !== mark.id))
  };
  const saveEditMark = (newMark, id) => {
    const indexNewMark = marks.findIndex((mark) => mark.id === id);
    const newMarks = [...marks];
    newMarks[indexNewMark] = newMark;
    setMarks(newMarks);
  }

  const params = useParams();
  return (
    <div className='App pageLesson'>
        <Link to="/lessons">
            <BackArrow />
        </Link>
        <Header text={params.subject} />
        <FormAddMark createMark={createMark} />
        {marks.length
                ?
                <MarksList marks={marks} removeMark={removeMark} saveEditMark={saveEditMark} />
                :
                <h2 className="header-noSubjects">
                    No Marks
                </h2>
            }
    </div>
  )
}
