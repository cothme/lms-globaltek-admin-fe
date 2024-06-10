import React, { useEffect, useState } from "react";
import Course from "../../interfaces/Course";
import { toastNotify } from "../../helpers/toastNotify";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../useAuthContext";
import swal from "sweetalert";

const useUpdateCourse = (courseId: string | undefined) => {
  const { user } = useAuthContext();
  const [course, setCourse] = useState<Course | null>(null);

  const [formData, setFormData] = useState<Course>({
    course_title: "",
    course_description: "",
    course_code: "",
    publisher: user.user_name,
    required_subscription: "Free",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      setError(null);
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
            course_title: json.course.course_title,
            course_description: json.course.course_description,
            course_code: json.course.course_code,
            publisher: json.course.publisher,
            required_subscription: json.course.required_subscription,
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

      if (response.ok) {
        toastNotify("Course updated!");
      } else if (response.status === 400) {
        toastNotify("Missing fields!");
      } else if (response.status === 500) {
        toastNotify("Course already exists!");
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
  };
};

export default useUpdateCourse;
