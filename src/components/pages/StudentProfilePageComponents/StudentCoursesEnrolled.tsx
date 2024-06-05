import React from "react";
import useFetchCoursesEnrolled from "../../hooks/student hooks/useFetchCoursesEnrolled";
import Course from "../../interfaces/Course";

interface UserProp {
  id: string | null | undefined;
}

const Loading: React.FC = () => (
  <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
    Loading...
  </div>
);

const Error: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
    Error: {message}
  </div>
);

const NoCourses: React.FC = () => (
  <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
    No courses enrolled
  </div>
);

const CourseTable: React.FC<{ courses: Course[] }> = ({ courses }) => (
  <div className="relative m-10 mt-0">
    <div className="flex flex-col">
      <div className="overflow-x-auto mt-4">
        <table className="table text-black bg-white w-full">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Publisher</th>
              <th>Tier</th>
              <th>Topics</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.course_code}</td>
                <td>{course.course_title}</td>
                <td>{course.publisher}</td>
                <td>{course.required_subscription}</td>
                <td>
                  {course.topics && course.topics.length > 0
                    ? course.topics.join(", ")
                    : "No topics"}
                </td>
                <td>
                  <a
                    className="btn btn-ghost btn-xs"
                    href={`/courses/${course._id}`}
                  >
                    More Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const StudentCoursesEnrolled: React.FC<UserProp> = ({ id }) => {
  const { coursesEnrolled, error, loading } = useFetchCoursesEnrolled(id);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!coursesEnrolled || coursesEnrolled.length === 0) return <NoCourses />;

  return <CourseTable courses={coursesEnrolled} />;
};

export default StudentCoursesEnrolled;
