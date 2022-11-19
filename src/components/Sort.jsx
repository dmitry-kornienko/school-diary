import FormBtn from './FormBtn';
import classes from '../style/Sort.module.css';
import { useContext } from 'react';
import { LessonsProvider } from './LessonsContext';


export default function Sort() {
  const sortLessonsBySubject = useContext(LessonsProvider);
  const sortLessonsByTeacher = useContext(LessonsProvider);
  const disableSort = useContext(LessonsProvider);
  return (
    <div className={classes.sort}>
        <FormBtn onClick={sortLessonsBySubject}>Sort by subject</FormBtn>
        <FormBtn onClick={sortLessonsByTeacher}>Sort by average mark</FormBtn>
        <FormBtn onClick={disableSort}>Disable sort</FormBtn>
    </div>
  )
}
    