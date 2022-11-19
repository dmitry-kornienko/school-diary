import FormBtn from './FormBtn';
import classes from '../style/Sort.module.css';
import { useLessons } from './LessonsContext';


export default function Sort() {
  const { sortLessonsBySubject } = useLessons();
  const { sortLessonsByTeacher } = useLessons();
  const { disableSort } = useLessons();
  
  return (
    <div className={classes.sort}>
        <FormBtn onClick={sortLessonsBySubject}>Sort by subject</FormBtn>
        <FormBtn onClick={sortLessonsByTeacher}>Sort by average mark</FormBtn>
        <FormBtn onClick={disableSort}>Disable sort</FormBtn>
    </div>
  )
}
    