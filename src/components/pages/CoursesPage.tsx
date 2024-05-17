import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import CourseCard from "./CoursePageComponents/CourseCard";
const CoursesPage = () => {
  const { user } = useAuthContext();
  return (
    <div className="lg:ml-60">
      <CourseCard
        course_title="Javascript Fundamentals"
        course_desc="Learn React with ease."
        progress="80"
      />
      <CourseCard
        course_title="Javascript Fundamentals"
        course_desc="Learn React with ease."
        progress="80"
      />
    </div>
  );
};

export default CoursesPage;
