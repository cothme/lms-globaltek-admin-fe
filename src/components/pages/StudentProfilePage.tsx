import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import StudentProfileV2 from "./StudentProfilePageComponents/StudentProfileV2";
import UpdateForm from "./StudentProfilePageComponents/UpdateForm";

interface User {
  _id: string;
  family_name: string;
  given_name: string;
  email: string;
  isFromGoogle: boolean;
  createdAt: string;
}

const StudentProfilePage = () => {
  const [users, setUser] = useState<User | null>(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_ROOT}/api/course/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();
      setUser(json);
      if (response.ok) {
        setUser(json);
      }
    };
    fetchUser();
  }, []);
  const { id } = useParams();
  return (
    <>
      <div className="lg:ml-60">
        <StudentProfileV2 users={users} />
        <UpdateForm users={users} />
      </div>
    </>
  );
};

export default StudentProfilePage;
