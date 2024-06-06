import CourseTable from "./CoursePageComponents/CourseTable";
const CoursesPage = () => {
  return (
    <>
      <div className="lg:ml-60 flex flex-col">
        <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
          <ul>
            <li>
              <a href="/courses">Course</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center lg:justify-end w-full">
          <div className="">
            <a
              data-testid={`add-course`}
              role="button"
              href="/courses/create"
              className="btn btn-accent font-garet m-4"
            >
              + Add Course
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <CourseTable />
      </div>
    </>
  );
};

export default CoursesPage;
