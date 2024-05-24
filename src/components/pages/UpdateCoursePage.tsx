import React from "react";
import CreateCourseForm from "./CoursePageComponents/CreateCourseForm";
import UpdateCourseForm from "./CoursePageComponents/UpdateCourseForm";
import { useParams } from "react-router-dom";

const UpdateCoursePage = () => {
  const { courseId } = useParams();
  return (
    <>
      <div className="lg:ml-60">
        <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
          <ul>
            <li>
              <a href="/courses">Course</a>
            </li>
            <li>
              <a href={`/courses/${courseId}`}>Course Profile</a>
            </li>
            <li>
              <a href={`/courses/update/${courseId}`}>Update Course</a>
            </li>
          </ul>
        </div>
        <UpdateCourseForm />
      </div>
    </>
  );
};

export default UpdateCoursePage;
