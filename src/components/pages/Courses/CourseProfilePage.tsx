import { useParams } from "react-router-dom";
import CourseProfileHeader from "./CourseProfilePageComponents/CourseProfileHeader";
import useFetchCourse from "../../hooks/course hooks/useFetchCourse";
import CourseProfileBody from "./CourseProfilePageComponents/CourseProfileBody";

const CourseProfilePage = () => {
  const { courseId } = useParams();
  const { course, setCourse } = useFetchCourse(courseId);

  return (
    <>
      <div className="">
        <CourseProfileHeader course={course} setCourse={setCourse} />
        <CourseProfileBody />
      </div>
    </>
  );
};

export default CourseProfilePage;
