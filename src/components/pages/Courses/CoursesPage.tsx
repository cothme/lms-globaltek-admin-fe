import CourseTable from "./CoursePageComponents/CourseTable";
import { ImSearch } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
const CoursesPage = () => {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="flex-grow mx-4"></div>
        <div className="mx-4">
          <a
            data-testid={`add-course`}
            role="button"
            href="/courses/create"
            className="btn btn-accent font-garet"
          >
            <IoMdAdd /> Add Course
          </a>
        </div>
      </div>
      <CourseTable />
    </>
  );
};

export default CoursesPage;
