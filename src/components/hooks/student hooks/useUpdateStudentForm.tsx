import { useState, useEffect } from "react";
import useAuthContext from "../useAuthContext";
import { toastNotify } from "../../helpers/toastNotify";
import User from "../../interfaces/User";

interface updateFormData {
  family_name?: string;
  given_name?: string;
  email?: string;
}

export const useUpdateStudentForm = (initialUser: User | null) => {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState<updateFormData>({
    family_name: "",
    given_name: "",
    email: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (initialUser) {
      setFormData({
        family_name: initialUser.family_name,
        given_name: initialUser.given_name,
        email: initialUser.email,
      });
      setIsModified(false);
    }
  }, [initialUser]);

  useEffect(() => {
    if (initialUser) {
      const hasChanges =
        formData.family_name !== initialUser.family_name ||
        formData.given_name !== initialUser.given_name ||
        formData.email !== initialUser.email;
      setIsModified(hasChanges);
    }
  }, [formData, initialUser]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
    setIsModified(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!initialUser) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user/${
          initialUser._id
        }`,
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
        toastNotify("Update successful! Please refresh");
        console.log("Update successful");
      } else {
        console.log("Update failed!", formData);
        toastNotify("Update failed:" + " " + json.error);
      }
    } catch (err: any) {}
  };

  return {
    formData,
    file,
    isModified,
    handleChange,
    handleFileChange,
    updateUser,
  };
};
