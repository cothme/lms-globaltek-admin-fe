import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./components/pages/LoginPage";
import useAuthContext from "./components/hooks/useAuthContext";
import MainLayout from "./components/layouts/MainLayout";
import CoursesPage from "./components/pages/CoursesPage";
import AboutPage from "./components/pages/AboutPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/pages/Dashboard";
import StudentsPage from "./components/pages/StudentsPage";
import StudentProfilePage from "./components/pages/StudentProfilePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import CourseProfilePage from "./components/pages/CourseProfilePage";
import CreateCoursePage from "./components/pages/CreateCoursePage";

const App = () => {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/profile/:id" element={<StudentProfilePage />} />
            <Route path="/course/:courseId" element={<CourseProfilePage />} />
            <Route path="/course/create" element={<CreateCoursePage />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
