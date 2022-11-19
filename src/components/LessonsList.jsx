import LessonItem from './LessonItem';
import classes from '../style/LessonsList.module.css';
import { useLessons } from './LessonsContext';

export default function LessonsList() {
  const { lessons } = useLessons();

  return (
    <div className={classes.lessonsList}>
        {lessons.map((lesson, index) =>
            <LessonItem number={index + 1} lesson={lesson} key={lesson.id} />)}
    </div>
  )
}
