import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import CourseCard from "./CoursePageComponents/CourseCard";
import CourseTable from "./CoursePageComponents/CourseTable";
const CoursesPage = () => {
  const { user } = useAuthContext();
  return (
    <>
      <div className="lg:ml-60 flex flex-col">
        <div className="text-3xl font-garet m-4">
          <span className="font-garetheavy text-theme-blue">Courses</span>
        </div>
        <div className="flex flex-row justify-center lg:justify-end w-full">
          <div className="">
            <button className="btn btn-accent font-garet m-4">
              + Add Course
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <CourseTable />
      </div>
    </>
  );
};

export default CoursesPage;
