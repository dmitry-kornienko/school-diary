import React from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';
import { useParams } from 'react-router-dom';
import FormInput from '../components/FormInput';
import FormBtn from '../components/FormBtn';
import Header from '../components/Header'

export default function LessonItem() {
  const params = useParams();
  return (
    <div className='App pageLesson'>
        <Link to="/lessons">
            <img src='../icons/back.png' alt="back" />
        </Link>
        <Header text={params.subject} />
        <div className='pageLesson__content'>
          <FormInput type='date' />
          <FormInput />
          <FormBtn>Add Mark</FormBtn>
        </div>
    </div>
  )
}
