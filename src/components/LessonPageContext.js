import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

const LessonPageContext = React.createContext();

export const useLessonPage = () => {
    return useContext(LessonPageContext);
}

export const LessonPageProvider = ({ children }) => {
    const [marks, setMarks] = useState([
        {id: 1, date: '2022-03-18', markValue: 4},
        {id: 2, date: '2022-03-19', markValue: 5},
        {id: 3, date: '2022-03-20', markValue: 3},
      ]);
    
      const createMark = (newMark) => {
        setMarks([...marks, newMark])
      };
      const removeMark = (mark) => {
        setMarks(marks.filter((l) => l.id !== mark.id))
      };
      const saveEditMark = (newMark, id) => {
        const indexNewMark = marks.findIndex((mark) => mark.id === id);
        const newMarks = [...marks];
        newMarks[indexNewMark] = newMark;
        setMarks(newMarks);
      }
    
      const params = useParams();
      
    return (
        <LessonPageContext.Provider value={{marks, setMarks, createMark, removeMark, saveEditMark, params}}>
            {children}
        </LessonPageContext.Provider>
    )
}