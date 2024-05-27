import { useParams } from "react-router-dom";
import CourseProfile from "./CourseProfilePageComponents/CourseProfile";
import useFetchCourse from "../../hooks/course hooks/useFetchCourse";

const CourseProfilePage = () => {
  const { courseId } = useParams();
  const { course, loading, error, setCourse } = useFetchCourse(courseId);

  return (
    <>
      <div className="lg:ml-60">
        <CourseProfile course={course} setCourse={setCourse} />
      </div>
    </>
  );
};

export default CourseProfilePage;
