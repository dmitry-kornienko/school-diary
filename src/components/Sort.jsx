import FormBtn from './FormBtn';
import classes from '../style/Sort.module.css';


export default function Sort({ sortLessonsBySubject, sortLessonsByTeacher, disableSort  }) {
  return (
    <div className={classes.sort}>
        <FormBtn onClick={sortLessonsBySubject}>Sort by subject</FormBtn>
        <FormBtn onClick={sortLessonsByTeacher}>Sort by average mark</FormBtn>
        <FormBtn onClick={disableSort}>Disable sort</FormBtn>
    </div>
  )
}
    