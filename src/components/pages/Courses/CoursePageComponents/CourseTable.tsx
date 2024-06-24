import { ImSearch } from "react-icons/im";
import { useFetchAllCourse } from "../../../hooks/course hooks/useFetchAllCourse";
import { useState } from "react";

const CourseTable = () => {
  const { courses } = useFetchAllCourse();
  const [courseSearch, setCourseSearch] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.course_code?.toLowerCase().includes(courseSearch.toLowerCase()) ||
      course.course_title?.toLowerCase().includes(courseSearch.toLowerCase()) ||
      course.publisher?.toLowerCase().includes(courseSearch.toLowerCase())
  );

  return (
    <>
      <div className="relative m-4">
        <input
          type="text"
          className="w-full inline-block border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Search"
          value={courseSearch}
          onChange={(e) => setCourseSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <ImSearch className="text-gray-400" />
        </div>
      </div>
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
            {filteredCourses.map((course) => (
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
