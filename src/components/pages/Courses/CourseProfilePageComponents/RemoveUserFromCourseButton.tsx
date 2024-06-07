import useRemoveUserFromCourse from "../../../hooks/course hooks/useRemoveUserFromCourse";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../../helpers/LoadingScreen";
import User from "../../../interfaces/User";
import useFetchSubscribers from "../../../hooks/course hooks/useFetchSubscribers";
import { FaTrashAlt } from "react-icons/fa";

const RemoveUserFromCourseButton: React.FC<User> = ({ _id }) => {
  const { courseId } = useParams();
  const { confirmDelete } = useRemoveUserFromCourse(String(_id));
  const { loading, error } = useFetchSubscribers(courseId);

  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRemoveUser = () => {
    confirmDelete(courseId || "", String(_id));
  };

  return (
    <>
      <button
        className="rounded-md p-2 text-white bg-red-700"
        onClick={handleRemoveUser}
      >
        <FaTrashAlt />
      </button>
    </>
  );
};

export default RemoveUserFromCourseButton;
