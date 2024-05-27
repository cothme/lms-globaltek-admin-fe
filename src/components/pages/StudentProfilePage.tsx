import StudentProfileV2 from "./StudentProfilePageComponents/StudentProfileV2";
import UpdateForm from "./StudentProfilePageComponents/UpdateForm";
import useFetchStudent from "../hooks/student hooks/useFetchStudent";

const StudentProfilePage = () => {
  const { users, loading, error } = useFetchStudent();

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
