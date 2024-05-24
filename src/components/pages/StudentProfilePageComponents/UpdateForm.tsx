import React, { useState, useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { toastNotify } from "../../helpers/toastNotify";

interface User {
  _id: string;
  family_name: string;
  given_name: string;
  email: string;
  isFromGoogle: boolean;
  createdAt: string;
}

interface UserProp {
  users: User | null;
}

interface updateFormData {
  family_name: string;
  given_name: string;
  email: string;
}

const UpdateForm: React.FC<UserProp> = ({ users }: UserProp) => {
  const { user } = useAuthContext();
  const [formData, setFormData] = useState<updateFormData>({
    family_name: "",
    given_name: "",
    email: "",
  });
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (users) {
      setFormData({
        family_name: users.family_name,
        given_name: users.given_name,
        email: users.email,
      });
      setIsModified(false);
    }
  }, [users]);

  useEffect(() => {
    if (users) {
      const hasChanges =
        formData.family_name !== users.family_name ||
        formData.given_name !== users.given_name ||
        formData.email !== users.email;
      setIsModified(hasChanges);
    }
  }, [formData, users]);

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user/${users?._id}`,
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
      toastNotify("Update successful! Please refresh");
      console.log("Update successful");
    } else {
      console.log("Update failed!", formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-row bg-theme-blue m-8 p-4 rounded-xl">
        <div></div>
        <form onSubmit={updateUser} className="w-full max-w-sm">
          <div className="relative text-3xl m-4 mt-0">
            <span className="font-garetheavy text-theme-gold">
              Account Details
            </span>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                Given Name
                {formData.given_name !== users?.given_name && (
                  <span className="text-red-600">*</span>
                )}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleChange}
                className="bg-white border-gray-200 rounded w-full py-2 px-4 text-gray-700"
                id="given_name"
                type="text"
                value={formData.given_name}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                Family Name
                {formData.family_name !== users?.family_name && (
                  <span className="text-red-600">*</span>
                )}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleChange}
                className="bg-white border-gray-200 rounded w-full py-2 px-4 text-gray-700"
                id="family_name"
                type="text"
                value={formData.family_name}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
                {formData.email !== users?.email && (
                  <span className="text-red-600">*</span>
                )}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleChange}
                className="bg-white border-gray-200 rounded w-full py-2 px-4 text-gray-700"
                id="email"
                type="text"
                value={formData.email}
              />
            </div>
          </div>
          {isModified && (
            <div className="flex justify-end">
              <button type="submit" className="btn flex justify-end btn-accent">
                Update
              </button>
            </div>
          )}
        </form>
        <div className="justify-self-end relative text-3xl m-4 mt-0">
          <span className="font-garetheavy text-theme-gold">
            Courses Enrolled
          </span>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
