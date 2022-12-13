import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lessons from '../pages/Lessons';
import { LessonPage } from '../pages/lessonsPage';
import Error from '../pages/Error';
import { LessonsProvider } from './LessonsContext';

export default function AppRouter() {
  return (
    <BrowserRouter>
          <LessonsProvider>
              <Routes>
                <Route path="/" element={<Lessons />} />
                <Route path="/lessons/:subject" element={<LessonPage />} />
                <Route path="*" element={<Error />} />
              </Routes>
          </LessonsProvider>
        </BrowserRouter>
  )
}
