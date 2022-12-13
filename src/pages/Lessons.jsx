import Form from "../components/Form";
import Header from "../components/Header";
import { useLessons } from "../components/LessonsContext";
import LessonsList from "../components/LessonsList";
import Sort from "../components/Sort";
import '../style/App.css';

function Lessons() {
    const { lessons } = useLessons();

    return (
        <div className="App">
                <Header>School Diary</Header>
                <Form />
                <Sort />
                {lessons.length
                    ?
                    <LessonsList />
                    :
                    <h2 className="header-noSubjects">
                        No Subjects
                    </h2>
                }
        </div>
    );
}

export default Lessons;

