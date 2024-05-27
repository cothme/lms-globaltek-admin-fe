import { useState } from "react";
import swal from "sweetalert";
import useAuthContext from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../helpers/toastNotify";
import Course from "../../../interfaces/Course";

interface CourseProp {
  course: Course | null;
  setCourse: (course: Course) => void;
}

const CourseProfile: React.FC<CourseProp> = ({
  course,
  setCourse,
}: CourseProp) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log(isPublishing);
    setIsPublishing(true);

    const newStatus = !course?.published;
    const success = await updatePublishedStatus(course?._id, newStatus);
    if (success && course) {
      setCourse({ ...course, published: newStatus });
    }
    setIsPublishing(false);
  };

  const updatePublishedStatus = async (
    courseId: string | undefined,
    newStatus: boolean | undefined
  ) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_API_ROOT
        }/api/course/publish/${courseId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ published: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update published status");
      }
      if (course?.published) {
        swal({
          icon: "success",
          text: "Unpublished Successfully!",
        });
      } else {
        swal({
          icon: "success",
          text: "Published Successfully!",
        });
      }

      return true;
    } catch (error) {
      swal({
        icon: "error",
        text: String(error + ": Unauthorized"),
      });
      return false;
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/${course?._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Unauthorized");
      }

      toastNotify("Deleted Successfully!");
      navigate("/courses");
    } catch (error) {
      console.error("Error deleting course:", error);
      swal({
        icon: "error",
        text: String(error),
      });
    }
  };

  const confirmDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this course!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        handleDelete();
      }
    });
  };

  return (
    <>
      <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
        <ul>
          <li>
            <a href="/courses">Course</a>
          </li>
          <li>
            <a href={`/courses/${course?._id}`}>Course Profile</a>
          </li>
        </ul>
      </div>
      <div className="relative rounded-lg m-8 min-w-screen bg-theme-blue shadow-2xl">
        <div className="flex items-center z-10">
          <div className=" text-white lg:text-4xl font-garet m-10">
            {course?.course_title}
          </div>
          <div className=" text-white lg:text-4xl font-garet m-10">
            Is Published: {String(course?.published)}
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <button
          onClick={handleClick}
          className={`btn ${
            course?.published ? "btn-secondary" : "bg-yellow-300"
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
          onClick={confirmDelete}
          className="btn bg-red-500 font-garet m-4"
        >
          Delete Course
        </button>
      </div>
    </>
  );
};

export default CourseProfile;
