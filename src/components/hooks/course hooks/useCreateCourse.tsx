import React, { useState } from "react";
import { toastNotify } from "../../helpers/toastNotify";
import useAuthContext from "../useAuthContext";
import Course from "../../interfaces/Course";
import { useFetchAllCourse } from "./useFetchAllCourse";

const useCreateCourse = () => {
  const { user } = useAuthContext();
  const { triggerRefresh } = useFetchAllCourse();
  const [formData, setFormData] = useState<Course>({
    course_title: "",
    course_description: "",
    course_code: "",
    publisher: user.user_name,
    required_subscription: "Free",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Course>>({});

  const createCourse = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const json = await response.json();

      if (response.ok) {
        toastNotify(json.message || "Course created successfully");
        triggerRefresh();
      } else {
        toastNotify(json.error);
      }
    } catch (err: any) {
      setError(err.message || "Failed to create course");
    } finally {
      setLoading(false);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

    setErrors({});
    createCourse();
    resetFields();
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
    createCourse,
    handleChange,
    handleSubmit,
    resetFields,
    formData,
    loading,
    error,
    errors,
  };
};

export default useCreateCourse;
