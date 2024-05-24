import React from "react";
import CreateCourseForm from "./CoursePageComponents/CreateCourseForm";

const CreateCoursePage = () => {
  return (
    <>
      <div className="lg:ml-60">
        <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
          <ul>
            <li>
              <a href="/mycourses">Created Course</a>
            </li>
            <li>
              <a href="/mycourses/create">Create Course</a>
            </li>
          </ul>
        </div>
        <CreateCourseForm />
      </div>
    </>
  );
};

export default CreateCoursePage;
