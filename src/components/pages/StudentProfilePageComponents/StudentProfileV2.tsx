import { useState } from "react";

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

const StudentProfileV2: React.FC<UserProp> = ({ users }: UserProp) => {
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
    </>
  );
};

export default StudentProfileV2;
