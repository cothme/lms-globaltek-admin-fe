import { useState } from "react";

interface User {
  _id: string;
  family_name: string;
  given_name: string;
  email: string;
  isFromGoogle: boolean;
  createdAt: string;
}
interface updateUser {
  family_name: string;
  given_name: string;
  email: string;
}
interface UserProp {
  users: User | null;
}
const defaultFormData = {
  family_name: "",
  given_name: "",
  email: "",
};

const StudentProfileV2: React.FC<UserProp> = ({ users }: UserProp) => {
  const [familyName, setFamilyName] = useState(users?.family_name || "");
  const [givenName, setGivenName] = useState(users?.given_name || "");
  const [email, setEmail] = useState(users?.email || "");
  const [familyNameChanged, setFamilyNameChanged] = useState(false);
  const [givenNameChanged, setGivenNameChanged] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);

  const handleFamilyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setFamilyName(newValue);
    setFamilyNameChanged(newValue !== users?.family_name);
  };

  const handleGivenNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setGivenName(newValue);
    setGivenNameChanged(newValue !== users?.given_name);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setEmail(newValue);
    setEmailChanged(newValue !== users?.email);
  };

  return (
    <>
      <div className="relative min-w-screen h-[25vh] lg:h-1/4 bg-theme-blue">
        <div className="absolute inset-0 flex items-center">
          <div className="relative flex items-center ml-10 lg:ml-20 mt-36 z-10 ">
            <img
              className="z-20 w-28 lg:w-48 mt-10 lg:mt-20 md:w-24 rounded-xl"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="User profile"
            />
            <div>
              <div className="ml-4 mb-4 mt-8 text-white text-l lg:text-4xl font-garet">
                {users?.given_name} {users?.family_name}
              </div>
              <div className="ml-4">
                <h2 className="text-sm lg:text-2xl font-garet text-theme-blue font-bold">
                  {users?.email}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-1/4 bg-gray-200 p-4 z-">
        <div className="container"></div>
      </div>
      <div className="relative text-3xl font-garet m-4">
        <span className="font-garetheavy text-theme-blue">Account</span>
      </div>
      <div className="overflow-x-auto"></div>
      <form className="w-full max-w-sm">
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
      </form>
    </>
  );
};

export default StudentProfileV2;
