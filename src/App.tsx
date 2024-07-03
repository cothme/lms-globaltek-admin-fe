import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./components/pages/LoginPage";
import useAuthContext from "./components/hooks/useAuthContext";
import MainLayout from "./components/layouts/MainLayout";
import CoursesPage from "./components/pages/Courses/CoursesPage";

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/pages/Dashboard";
import StudentsPage from "./components/pages/StudentsPage";
import StudentProfilePage from "./components/pages/StudentProfilePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import CourseProfilePage from "./components/pages/Courses/CourseProfilePage";
import CreateCoursePage from "./components/pages/Courses/CreateCoursePage";
import UpdateCoursePage from "./components/pages/UpdateCoursePage";
import TierMainPage from "./components/pages/Tiers/TierMainPage";
import ModuleOverview from "./components/pages/Module/ModuleOverview";

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
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="students/:userName" element={<StudentProfilePage />} />
            <Route path="/courses/:courseId" element={<CourseProfilePage />} />
            <Route path="/courses/create" element={<CreateCoursePage />} />
            <Route path="/:topicName" element={<ModuleOverview />} />
            <Route
              path="/courses/update/:courseId"
              element={<UpdateCoursePage />}
            />
            <Route path="/tiers" element={<TierMainPage />} />
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
