import React, { useState } from "react";
import StudentStats from "./StudentStats";
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
const UpdateForm: React.FC<UserProp> = ({ users }: UserProp) => {
  const [familyName, setFamilyName] = useState(users?.family_name || "");
  const [givenName, setGivenName] = useState(users?.given_name || "");
  const [email, setEmail] = useState(users?.email || "");
  const [familyNameChanged, setFamilyNameChanged] = useState(false);
  const [givenNameChanged, setGivenNameChanged] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const handleFamilyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setFamilyName(newValue);
    setFamilyNameChanged(newValue !== users?.family_name);
    setIsModified(newValue !== users?.family_name);
  };

  const handleGivenNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setGivenName(newValue);
    setGivenNameChanged(newValue !== users?.given_name);
    setIsModified(newValue !== users?.given_name);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setEmail(newValue);
    setEmailChanged(newValue !== users?.email);
    setIsModified(newValue !== users?.email);
  };
  return (
    <>
      <div className="lg:ml-96 lg:m-0 mx-10 items-center flex flex-col md:flex-row lg:flex-row md:items-start lg:items-start">
        <form className="w-full max-w-sm">
          <div className="relative text-3xl m-4">
            <span className="font-garetheavy text-theme-blue">
              Account Details
            </span>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Given Name
                {givenNameChanged && <span className="text-red-600">*</span>}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleGivenNameChange}
                className="bg-gray-200 border-gray-200 rounded w-full py-2 px-4 text-gray-700 "
                id="given_name"
                type="text"
                defaultValue={users?.given_name}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Family Name
                {familyNameChanged && <span className="text-red-600">*</span>}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleFamilyNameChange}
                className="bg-gray-200 border-gray-200 rounded w-full py-2 px-4 text-gray-700 "
                id="family_name"
                type="text"
                defaultValue={users?.family_name}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
                {emailChanged && <span className="text-red-600">*</span>}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleEmailChange}
                className="bg-gray-200 border-gray-200 rounded w-full py-2 px-4 text-gray-700 "
                id="family_name"
                type="text"
                defaultValue={users?.email}
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
        <div>
          <StudentStats></StudentStats>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
