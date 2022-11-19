import { React, useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import LessonsList from "../components/LessonsList";
import Sort from "../components/Sort";
import '../style/App.css';

export const Context = React.createContext();

function Lessons() {
    const [lessons, setLessons] = useState([
        {id: 1, subject: 'Maths', teacher: 'Selena Gomez', rating: 4.1},
        {id: 2, subject: 'English', teacher: 'Jenefer Lopez', rating: 3.7},
        {id: 3, subject: 'Chemistry', teacher: 'Zipppulya', rating: 5},
        {id: 4, subject: 'Physics', teacher: 'Ariana Grande', rating: 4.3},
        {id: 5, subject: 'Art', teacher: 'Morgenshtern', rating: 5},
    ]);
        
        const createLesson = (newLesson) => {
            setLessons([...lessons, newLesson])
        }
        const saveEditLesson = (newLesson, id) => {
            const indexNewLesson = lessons.findIndex((lesson) => lesson.id === id);
            const newLessons = [...lessons];
            newLessons[indexNewLesson] = newLesson;
            setLessons(newLessons);
        }
        const removeLesson = (lesson) => {
            setLessons(lessons.filter((l) => l.id !== lesson.id))
        }
        const sortLessonsBySubject = () => {
            setLessons([...lessons].sort((a, b) => a.subject.localeCompare(b.subject)));
        }
        const sortLessonsByTeacher = () => {
            setLessons([...lessons].sort((a, b) => a.teacher.localeCompare(b.teacher)));
        }
        const disableSort = () => {
            setLessons([...lessons].sort((a, b) => a.id - b.id));
        }

    return (
        <Context.Provider value={{lessons, setLessons, removeLesson, saveEditLesson}}>
            <div className="App">
                <Header text='School Diary' />
                <Form create={createLesson} />
                <Sort sortLessonsBySubject={sortLessonsBySubject} sortLessonsByTeacher={sortLessonsByTeacher} disableSort={disableSort} lessons={lessons} />
                {lessons.length
                    ?
                    <LessonsList />
                    :
                    <h2 className="header-noSubjects">
                        No Subjects
                    </h2>
                }
            </div>
        </Context.Provider>
    );
}

export default Lessons;

