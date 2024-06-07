import { useParams } from "react-router-dom";
import useFetchCourse from "../../../hooks/course hooks/useFetchCourse";

const CourseProfileOverview = () => {
  const { courseId } = useParams();
  const { course } = useFetchCourse(courseId);
  const createdAt = String(course?.createdAt);
  var date = new Date(createdAt);
  return (
    <>
      <div className="w-11/12 border border-black rounded-box">
        <table className="table w-auto">
          <tbody>
            <tr>
              <th className="font-semibold">Code</th>
              <td>{course?.course_code}</td>
            </tr>
            <tr>
              <th className="font-semibold">Title</th>
              <td>{course?.course_title}</td>
            </tr>
            <tr>
              <th className="font-semibold">Description</th>
              <td>{course?.course_description}</td>
            </tr>
            <tr>
              <th className="font-semibold">Is Published</th>
              <td>{course?.published ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th className="font-semibold">Publisher</th>
              <td>{course?.publisher}</td>
            </tr>
            <tr>
              <th className="font-semibold">Tier</th>
              <td>{course?.required_subscription}</td>
            </tr>
            <tr>
              <th className="font-semibold">Creation date</th>
              <td>
                {date.toLocaleString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourseProfileOverview;
