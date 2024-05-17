import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import CourseCard from "./CoursePageComponents/CourseCard";
const CoursesPage = () => {
  const { user } = useAuthContext();
  return (
    <div className="lg:ml-80">
      <CourseCard
        course_title="React JS"
        course_desc="Learn React with ease."
        progress="80"
      />

      <CourseCard
        course_title="Java"
        course_desc="Learn Java with ease."
        progress="50"
      />
    </div>
  );
};

export default CoursesPage;
