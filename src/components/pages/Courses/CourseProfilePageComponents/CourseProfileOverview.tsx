import { useParams } from "react-router-dom";
import useFetchCourse from "../../../hooks/course hooks/useFetchCourse";

const CourseProfileOverview = () => {
  const { courseId } = useParams();
  const { course } = useFetchCourse(courseId);
  return (
    <>
      <div className="flex m-4 w-1/2">
        <div>{course?.course_description}</div>
      </div>
    </>
  );
};

export default CourseProfileOverview;
