import useAuthContext from "../../hooks/useAuthContext";
import OwnedCourseTable from "./CoursePageComponents/OwnedCourseTable";
const OwnedCoursesPage = () => {
  const { user } = useAuthContext();
  return (
    <>
      <div className="lg:ml-60 flex flex-col">
        <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
          <ul>
            <li>
              <a href="/mycourses">Created Courses</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center lg:justify-end w-full">
          <div className="">
            <a
              href="/mycourses/create"
              className="btn btn-accent font-garet m-4"
            >
              + Add Course
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <OwnedCourseTable />
      </div>
    </>
  );
};

export default OwnedCoursesPage;
