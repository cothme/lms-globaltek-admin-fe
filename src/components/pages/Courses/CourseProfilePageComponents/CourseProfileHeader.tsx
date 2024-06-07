import Course from "../../../interfaces/Course";
import useDeleteCourse from "../../../hooks/course hooks/useDeleteCourse";
import { GrUpdate } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdCheckCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface CourseProp {
  course: Course | null;
  setCourse: (course: Course) => void;
}

const CourseProfileHeader: React.FC<CourseProp> = ({
  course,
  setCourse,
}: CourseProp) => {
  const { isPublishing, handlePublishClick, confirmDelete } = useDeleteCourse(
    course,
    setCourse
  );
  const isPublished = course?.published;

  return (
    <>
      <div className="text-3xl breadcrumbs font-garetheavy text-theme-blue m-4">
        <ul>
          <li>
            <a href="/courses">Course</a>
          </li>
          <li>
            <a href={`/courses/${course?._id}`}>Course Profile</a>
          </li>
        </ul>
      </div>
      <div className="relative rounded-lg m-4 bg-theme-blue">
        <div className="flex items-center z-10">
          <div className="text-white lg:text-2xl font-garet m-10">
            {course?.course_title}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row m-4 gap-4">
        <button
          data-testid={`publish-course`}
          onClick={handlePublishClick}
          className={`btn ${
            isPublished ? "btn-neutral" : "btn-warning"
          } font-garet text-white`}
          disabled={isPublishing}
        >
          {isPublished ? <MdCheckCircleOutline /> : <IoIosCheckmarkCircle />}
          {isPublished ? "Unpublish Course" : "Publish Course"}
        </button>

        <a
          href={`/courses/update/${course?._id}`}
          className="btn text-white btn-primary font-garet"
        >
          <GrUpdate /> Update Course
        </a>

        <button
          data-testid={`delete-course`}
          onClick={confirmDelete}
          className="btn text-white btn-error font-garet"
        >
          <AiTwotoneDelete /> Delete Course
        </button>
      </div>
    </>
  );
};

export default CourseProfileHeader;
