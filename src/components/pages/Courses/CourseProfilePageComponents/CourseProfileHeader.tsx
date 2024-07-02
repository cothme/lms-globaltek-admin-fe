import Course from "../../../interfaces/Course";
import useDeleteCourse from "../../../hooks/course hooks/useDeleteCourse";
import { GrUpdate } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdCheckCircleOutline } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import CourseBanner from "../../../../assets/course_banner.png";

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
      <div className="relative m-4">
        <div className="z-10">
          <div className="flex justify-center">
            <img
              className="lg:w-2/6 shadow-md rounded-box"
              src={CourseBanner}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row m-4 gap-4 mx-4">
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
          data-testid={`edit-course-btn`}
          href={`/courses/update/${course?.course_title}`}
          className="btn text-white btn-primary font-garet"
        >
          <GrUpdate /> Edit Course
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
