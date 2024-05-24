import React, { useState } from "react";
import useAuthContext from "../../../hooks/useAuthContext";
import { toastNotify } from "../../../helpers/toastNotify";
import { json } from "react-router-dom";

interface createCourseData {
  course_title: string;
  course_description: string;
  course_code: string;
  difficulty: number | null;
  publisher: string;
  required_subscription: string;
}

const CreateCourseForm = () => {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState<createCourseData>({
    course_title: "",
    course_description: "",
    course_code: "",
    difficulty: null,
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
      difficulty: null,
      publisher: user.user_name,
      required_subscription: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-5/6 h-1/2 border border-black mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="flex flex-row gap-5">
        <div className="mb-4 w-1/3">
          <label
            htmlFor="course_code"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Code
          </label>
          <input
            type="text"
            id="course_code"
            placeholder="e.g, IT0041"
            value={formData.course_code}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4 w-2/3">
          <label
            htmlFor="course_title"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Title
          </label>
          <input
            type="text"
            id="course_title"
            placeholder="e.g. Introduction to Data Analysis"
            value={formData.course_title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="course_description"
          className="block text-gray-700 font-bold mb-2"
        >
          Course Description
        </label>
        <textarea
          id="course_description"
          placeholder="Enter course description"
          value={formData.course_description}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="required_subscription"
          className="block text-gray-700 font-bold mb-2"
        >
          Subscription Type
        </label>
        <select
          id="required_subscription"
          value={formData.required_subscription}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select subscription type</option>
          <option value="Free">Free</option>
          <option value="Premium">Premium</option>
          <option value="Pro">Pro</option>
        </select>
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Create Course
        </button>
      </div>
    </form>
  );
};

export default CreateCourseForm;