import StudentProfileV2 from "./StudentProfilePageComponents/StudentProfileV2";
import StudentUpdateForm from "./StudentProfilePageComponents/StudentUpdateForm";
import useFetchStudent from "../hooks/student hooks/useFetchStudent";
import LoadingScreen from "../helpers/LoadingScreen";

const StudentProfilePage = () => {
  const { users, loading, error } = useFetchStudent();

  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="lg:ml-60">
        <StudentProfileV2 users={users} />
        <StudentUpdateForm users={users} />
      </div>
    </>
  );
};

export default StudentProfilePage;
