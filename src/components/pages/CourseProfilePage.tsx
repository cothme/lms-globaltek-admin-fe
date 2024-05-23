import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import CourseProfile from "./CourseProfilePageComponents/CourseProfile";

interface Course {
  _id: string;
  course_title: string;
  course_description: string;
  course_code: string;
  publisher: string;
  difficulty: string;
  required_subscription: string;
  published: boolean;
}

const CourseProfilePage = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const { user } = useAuthContext();
  const { courseId } = useParams();
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();
      setCourse(json);
      if (response.ok) {
        setCourse(json);
      }
    };
    fetchCourse();
  }, []);
  return (
    <>
      <div className="lg:ml-60">
        <CourseProfile course={course} />
      </div>
    </>
  );
};

export default CourseProfilePage;
