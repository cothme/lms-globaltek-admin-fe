import useAuthContext from "../../hooks/useAuthContext";
import CourseTable from "./CoursePageComponents/CourseTable";
const CoursesPage = () => {
  const { user } = useAuthContext();
  return (
    <>
      <div className="lg:ml-60 flex flex-col">
        <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
          <ul>
            <li>
              <a href="/courses">All Courses</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center lg:justify-end w-full"></div>
        <div className="divider"></div>
        <CourseTable />
      </div>
    </>
  );
};

export default CoursesPage;