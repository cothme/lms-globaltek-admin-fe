import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";

const StatisticsSection = () => {
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();
      setCourseCount(json);
      if (response.ok) {
        setCourseCount(json.courseCount);
      }
    };
    fetchCourses();
    const fetchAdmins = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/admin`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();
      setAdminCount(json);
      if (response.ok) {
        setAdminCount(json.adminCount);
      }
    };
    fetchAdmins();
    const fetchUsers = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/user`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();
      setUserCount(json);
      if (response.ok) {
        setUserCount(json.userCount);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div
          className="bg-gradient-to-r from-theme-maroon from-25% via-theme-gold via-100% 
          w-full
          text-white
          p-6 m-4 h-1/4
          md:rounded-s-full
          hover:scale-75
          duration-500"
        >
          <div className="font-garet text-center text-3xl">Students</div>
          <div className="font-garetheavy text-center text-4xl mt-4">
            {userCount}
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-theme-gold from-25% via-theme-gold via-100% 
          w-full
          text-white
          p-6 m-4 h-1/4
          hover:scale-75
          duration-500"
        >
          <div className="font-garet text-center text-3xl">Courses</div>
          <div className="font-garetheavy text-center text-4xl mt-4">
            {courseCount}
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-theme-gold from-25% via-theme-maroon via-100% 
          w-full
          text-white
          p-6 m-4 h-1/4
          md:rounded-e-full
          hover:scale-75
          duration-500"
        >
          <div className="font-garet text-center text-3xl">Admin</div>
          <div className="font-garetheavy text-center text-4xl mt-4">
            {adminCount}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsSection;
