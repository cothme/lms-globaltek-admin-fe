import React, { useState } from "react";
import { toastNotify } from "../../helpers/toastNotify";
import useAuthContext from "../useAuthContext";
import Topic from "../../interfaces/Topic";
import { useParams } from "react-router-dom";

const useCreateTopic = () => {
  const { user } = useAuthContext();
  const { courseId } = useParams();
  const [formData, setFormData] = useState<Topic>({
    topic_title: "",
    topic_description: "",
    pdf: "",
    video: "",
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Topic>>({});

  const createTopic = async () => {
    const currentErrors: Partial<Topic> = {};

    if (!formData.topic_title)
      currentErrors.topic_title = "Topic title is required";

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return { success: false, errors: currentErrors };
    }

    const formDataToSend = new FormData();
    formDataToSend.append("topic_title", String(formData.topic_title));
    formDataToSend.append(
      "topic_description",
      String(formData.topic_description)
    );
    if (pdfFile) formDataToSend.append("pdf", pdfFile);
    if (videoFile) formDataToSend.append("video", videoFile);

    setErrors({});
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_REACT_APP_API_ROOT
        }/api/topic/create/${courseId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
          body: formDataToSend,
        }
      );
      const json = await response.json();

      if (response.ok) {
        toastNotify(json.message || "Topic created successfully");
        resetFields();
      } else {
        toastNotify(json.error);
      }
    } catch (err: any) {
      setError(err.message || "Failed to create topic");
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files } = e.target;
    if (files && files.length > 0) {
      if (id === "pdf") {
        setPdfFile(files[0]);
      } else if (id === "video") {
        setVideoFile(files[0]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTopic();
  };

  const resetFields = () => {
    setFormData({
      topic_title: "",
      topic_description: "",
      pdf: "",
      video: "",
    });
    setPdfFile(null);
    setVideoFile(null);
  };

  return {
    createTopic,
    handleChange,
    handleFileChange,
    handleSubmit,
    resetFields,
    formData,
    pdfFile,
    videoFile,
    loading,
    error,
    errors,
  };
};

export default useCreateTopic;
