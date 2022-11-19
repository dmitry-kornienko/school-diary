import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/App.css';
import FormAddMark from '../../components/FormAddMark';
import MarksList from '../../components/MarksList';
import BackArrow from '../../components/BackArrow';
import { useLessonPage } from '../../components/LessonPageContext';
import MarksHeader from '../../components/MarksHeader';

export function LessonPage() {
  const { marks } = useLessonPage();

  return (
    <div className='App pageLesson'>
        <Link to="/lessons">
            <BackArrow />
        </Link>
        <MarksHeader />
        <FormAddMark />
        {marks.length
                ?
                <MarksList />
                :
                <h2 className="header-noSubjects">
                    No Marks
                </h2>
            }
    </div>
  )
}
