import Course from "../../../interfaces/Course";
import useDeleteCourse from "../../../hooks/course hooks/useDeleteCourse";

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
          <div className=" text-white lg:text-2xl font-garet m-10">
            {course?.course_title}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <button
          data-testid={`publish-course`}
          role="button"
          onClick={handlePublishClick}
          className={`btn ${
            course?.published ? "btn-neutral" : "bg-yellow-300"
          } font-garet m-4`}
          disabled={isPublishing}
        >
          {course?.published ? "Unpublish Course" : "Publish Course"}
        </button>
        <a
          href={`/courses/update/${course?._id}`}
          className="btn bg-green-500 font-garet m-4"
        >
          Update Course
        </a>
        <button
          data-testid={`delete-course`}
          role="button"
          onClick={confirmDelete}
          className="btn bg-red-500 font-garet m-4"
        >
          Delete Course
        </button>
      </div>
    </>
  );
};

export default CourseProfileHeader;
