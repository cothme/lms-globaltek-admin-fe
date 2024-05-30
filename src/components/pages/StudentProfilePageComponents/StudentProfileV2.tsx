import User from "../../interfaces/User";

interface UserProp {
  users: User | null;
}

const StudentProfileV2: React.FC<UserProp> = ({ users }: UserProp) => {
  return (
    <>
      <div className="text-4xl breadcrumbs font-garetheavy text-theme-blue m-4">
        <ul>
          <li>
            <a href="/students">Students</a>
          </li>
          <li>
            <a href={`${users?._id}`}>Student Profile</a>
          </li>
        </ul>
      </div>
      <div className="relative rounded-lg m-8 min-w-screen h-[20vh] lg:h-[24vh] bg-theme-blue ">
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
