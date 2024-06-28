import User from "../../interfaces/User";
import ProfileImagePlaceHolder from "../../../assets/profile-img-placeholder.png";

interface UserProp {
  users: User | null;
}

const StudentProfileV2: React.FC<UserProp> = ({ users }: UserProp) => {
  return (
    <>
      <div className="relative rounded-lg m-8 min-w-screen h-[20vh] lg:h-[24vh] bg-theme-blue ">
        <div className="relative flex items-center z-10 ">
          <img
            className="ml-8 mt-6 w-32 lg:w-32 rounded-xl"
            src={
              users?.picture
                ? import.meta.env.VITE_REACT_APP_API_ROOT! +
                  "/" +
                  users?.picture
                : ProfileImagePlaceHolder
            }
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
