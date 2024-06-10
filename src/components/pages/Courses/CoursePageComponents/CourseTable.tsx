import { useFetchAllCourse } from "../../../hooks/course hooks/useFetchAllCourse";

const CourseTable = () => {
  const { courses } = useFetchAllCourse();

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Publisher</th>
              <th>Status</th>
              <th>Required Subscription</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.course_code}</td>
                <td>{course.course_title}</td>
                <td>{course.publisher}</td>
                <td>
                  <span
                    className={`bg-${
                      course.published ? "green-500" : "red-600"
                    } font-bold text-white  h-1/2 rounded-lg px-2 p-1 `}
                  >
                    {course.published ? "Published" : "Not Published"}
                  </span>
                </td>
                <td>{course.required_subscription}</td>
                <td>
                  <a
                    href={`courses/${course.course_title}`}
                    className="btn btn-ghost btn-xs"
                  >
                    More Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourseTable;
