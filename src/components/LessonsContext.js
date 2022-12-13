import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LessonsContext = React.createContext();

export const useLessons = () => {
    return useContext(LessonsContext);
}

export const LessonsProvider = ({ children }) => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        // не возвращает пустой массив при первом рендере, если LS пустой
        // const raw = localStorage.getItem('lessons') || []; 
        const raw = localStorage.getItem('lessons');
        setLessons(JSON.parse(raw));
    }, [])

    useEffect(() => {
        localStorage.setItem('lessons', JSON.stringify(lessons));
    }, [lessons])
        
        const createLesson = (newLesson) => {
            setLessons([...lessons, newLesson]);
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
            setLessons([...lessons].sort((a, b) => b.rating - a.rating));
        }
        const disableSort = () => {
            setLessons([...lessons].sort((a, b) => a.id - b.id));
        }



    
      const createMark = (newMark, index) => {
        let sumMarks = 0;
        const newLessons = [...lessons];
        newLessons[index].marks.unshift(newMark);

        newLessons[index].marks.forEach(mark => 
            sumMarks += Number(mark.markValue)
        )

        const rating = sumMarks / newLessons[index].marks.length;


        newLessons[index].rating = rating.toFixed(2);
        setLessons(newLessons)
      };
      
      const removeMark = (mark, lessonIndex) => {
        const newLessons = [...lessons]
        const newMarks = newLessons[lessonIndex].marks.filter((item) => item.id !== mark.id)
        newLessons[lessonIndex].marks = newMarks
        let sum = 0;
        newLessons[lessonIndex].marks.forEach(mark =>sum += Number(mark.markValue));
        const rating = sum / newLessons[lessonIndex].marks.length;
        newLessons[lessonIndex].rating = rating.toFixed(2);
        setLessons(newLessons)
      };

      const saveEditMark = (editedMark, lessonIndex) => {

        const newLessons = [...lessons];
        const indexEditedMark = lessons[lessonIndex].marks.findIndex(i => i.id === editedMark.id);
        newLessons[lessonIndex].marks[indexEditedMark] = editedMark;
        let sum = 0;
        newLessons[lessonIndex].marks.forEach(mark =>sum += Number(mark.markValue));
        const rating = sum / newLessons[lessonIndex].marks.length;
        newLessons[lessonIndex].rating = rating.toFixed(2);
        setLessons(newLessons);
      };

      const params = useParams();


    return (
        <LessonsContext.Provider value={{removeMark, saveEditMark, createMark, params, lessons, setLessons, createLesson, saveEditLesson, removeLesson, sortLessonsBySubject, sortLessonsByTeacher, disableSort}}>
            { children }
        </LessonsContext.Provider>
    )
}