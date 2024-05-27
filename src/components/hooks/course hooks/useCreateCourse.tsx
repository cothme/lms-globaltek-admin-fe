import React, { useState } from "react";
import { toastNotify } from "../../helpers/toastNotify";
import useAuthContext from "../useAuthContext";
import Course from "../../interfaces/Course";

const useCreateCourse = () => {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState<Course>({
    course_title: "",
    course_description: "",
    course_code: "",
    publisher: user.user_name,
    required_subscription: "",
  });

  const createCourse = async () => {
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
      toastNotify("Course created!");
    } else {
      toastNotify(json.error);
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
    createCourse();
    resetFields();
    console.log("Form submitted:", formData);
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
  return { createCourse, handleChange, handleSubmit, resetFields, formData };
};

export default useCreateCourse;
