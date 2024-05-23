import React from "react";

const CreateCoursePage = () => {
  return (
    <>
      <div className="lg:ml-60">
        <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
          <ul>
            <li>
              <a href="/courses">Course</a>
            </li>
            <li>
              <a href="/course/create">Create Course</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreateCoursePage;
