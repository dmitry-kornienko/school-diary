import { Link, useParams } from 'react-router-dom';
import '../../style/App.css';
import FormAddMark from '../../components/FormAddMark';
import MarksList from '../../components/MarksList';
import BackArrow from '../../components/BackArrow';
import MarksHeader from '../../components/MarksHeader';
import { useLessons } from '../../components/LessonsContext';

export function LessonPage() {
  const { lessons } = useLessons();
  const params = useParams();
  const currentLesson = lessons.find(lesson => lesson.subject === params.subject);
  const lessonMarks = currentLesson.marks;

  return (
    <div className='App pageLesson'>
        <Link to="/">
            <BackArrow />
        </Link>
        <MarksHeader />
        <FormAddMark />
        {currentLesson.marks.length
        	?
        	<MarksList marks={lessonMarks} />
        	:
        	<h2 className="header-noSubjects">
        	No Marks
        	</h2>
        }
    </div>
  )
}
