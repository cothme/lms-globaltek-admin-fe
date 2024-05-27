import React, { useEffect, useState } from "react";
import Course from "../../interfaces/Course";
import { toastNotify } from "../../helpers/toastNotify";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../useAuthContext";

const useUpdateCourse = (courseId: string | undefined) => {
  const { user } = useAuthContext();
  const [course, setCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState<Course>({
    course_title: "",
    course_description: "",
    course_code: "",
    publisher: user.user_name,
    required_subscription: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          }
        );
        const json = await response.json();
        if (response.ok) {
          setCourse(json);
          setFormData({
            course_title: json.course_title,
            course_description: json.course_description,
            course_code: json.course_code,
            publisher: json.publisher,
            required_subscription: json.required_subscription,
          });
        } else {
          setError(json.message || "Failed to fetch course");
          navigate("/courses");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch course");
        navigate("/mycourses");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourse();
    }
  }, [courseId, navigate, user.jwt]);

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

      if (response.ok) {
        toastNotify("Course updated!");
      } else {
        toastNotify(json.error);
      }
    } catch (err: any) {
      toastNotify(err.message || "Failed to update course");
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
      required_subscription: "",
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
  };
};

export default useUpdateCourse;
