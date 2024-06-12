import React, { useEffect, useState } from "react";
import Course from "../../interfaces/Course";
import { toastNotify } from "../../helpers/toastNotify";
import useAuthContext from "../useAuthContext";
import swal from "sweetalert";
import useFetchCourse from "./useFetchCourse";

const useUpdateCourse = (courseId: string | undefined) => {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState<Course>({
    course_title: "",
    course_description: "",
    course_code: "",
    publisher: user.user_name,
    required_subscription: "Free",
  });
  const { course, loading, error } = useFetchCourse(courseId);
  const [errors, setErrors] = useState<Partial<Course>>({});
  useEffect(() => {
    if (course) {
      setFormData({
        course_title: course.course_title,
        course_description: course.course_description,
        course_code: course.course_code,
        publisher: course.publisher,
        required_subscription: course.required_subscription,
      });
    }
  }, [course]);

  const updateCourse = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/${courseId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const json = await response.json();
      const currentErrors: Partial<Course> = {};

      if (!formData.course_code)
        currentErrors.course_code = "Course Code is required";
      if (!formData.course_title)
        currentErrors.course_title = "Course Title is required";
      if (!formData.course_description)
        currentErrors.course_description = "Course Description is required";

      if (Object.keys(currentErrors).length > 0) {
        setErrors(currentErrors);
        return { success: false, errors: currentErrors };
      }
      if (response.ok) {
        toastNotify("Course updated!");
      } else if (response.status === 400) {
        toastNotify(json.error || "Failed to update course");
      } else if (response.status === 500) {
        toastNotify("Course already exists!");
      } else if (response.status === 403) {
        swal({
          icon: "error",
          text: String("Unauthorized"),
        });
      }
    } catch (error: any) {
      swal({
        icon: "error",
        text: String(error + ": Unauthorized"),
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const resetFields = () => {
    setFormData({
      course_title: "",
      course_description: "",
      course_code: "",
      publisher: user.user_name,
      required_subscription: "Free",
    });
  };
  return {
    formData,
    loading,
    error,
    handleChange,
    handleSubmit: updateCourse,
    resetFields,
    course,
    errors,
  };
};

export default useUpdateCourse;
