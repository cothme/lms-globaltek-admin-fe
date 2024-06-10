import CourseTable from "./CoursePageComponents/CourseTable";
import { ImSearch } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
const CoursesPage = () => {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              className="w-full inline-block border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <ImSearch className="text-gray-400" />
            </div>
          </div>
        </div>
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
