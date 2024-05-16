import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import StudentProfile from "./StudentProfilePageComponents/StudentProfile";
import ProfilePlaceholder from "../../assets/img-placeholder.png";
import Logo from "../../assets/branding/linkedlearnlogonotextwhite.png";
import StudentProfileV2 from "./StudentProfilePageComponents/StudentProfileV2";

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
      const response = await fetch(`http://localhost:4000/api/user/${id}`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
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
      {/* <StudentProfile users={users} /> */}
      <StudentProfileV2 users={users} />
    </>
  );
};

export default StudentProfilePage;
