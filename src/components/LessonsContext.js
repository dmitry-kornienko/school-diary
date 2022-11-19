import React, { useContext, useState } from 'react';

const LessonsContext = React.createContext();

export const useLessons = () => {
    return useContext(LessonsContext);
}

export const LessonsProvider = ({ children }) => {

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
        <LessonsContext.Provider value={{lessons, setLessons, createLesson, saveEditLesson, removeLesson, sortLessonsBySubject, sortLessonsByTeacher, disableSort}}>
            { children }
        </LessonsContext.Provider>
    )
}