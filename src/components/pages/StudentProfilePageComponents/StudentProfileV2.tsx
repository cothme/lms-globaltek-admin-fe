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
      <div className="relative text-4xl mx-4 mt-4">
        <span className="font-garetheavy text-theme-blue">User Profile</span>
      </div>
      <div className="relative rounded-lg m-8 min-w-screen h-[20vh] lg:h-[24vh] bg-theme-blue shadow-2xl">
        <div className="relative flex items-center z-10 ">
          <img
            className="ml-8 mt-6 w-32 lg:w-32 rounded-xl"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="User profile"
          />
          <div className="flex flex-col">
            <div>
              <div className="ml-4 text-white lg:text-4xl font-garet">
                {users?.given_name} {users?.family_name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfileV2;
