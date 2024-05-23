import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";

interface Course {
  _id: string;
  course_code: string;
  course_title: string;
  publisher: string;
  published: boolean;
}

const CourseTable = () => {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();
      setCourses(json);
      if (response.ok) {
        setCourses(json.courses);
      }
    };
    fetchUsers();
  }, []);
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
              <th>Is Published</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courses.map((course) => (
              <tr>
                <td>{course.course_code}</td>
                <td>{course.course_title}</td>
                <td>{course.publisher}</td>
                <td>
                  <span className="bg green-100 font-bold text-white bg-red-500 p-1 rounded-xl px-10">
                    No
                  </span>
                </td>
                <td>
                  <a
                    href={`course/${course._id}`}
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
