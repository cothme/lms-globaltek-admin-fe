import User from "../../interfaces/User";
import { useUpdateStudentForm } from "../../hooks/student hooks/useUpdateStudentForm";
import StudentCoursesEnrolled from "./StudentCoursesEnrolled";
import { useParams } from "react-router-dom";

interface UserProp {
  users: User | null;
}

const StudentUpdateForm: React.FC<UserProp> = ({ users }: UserProp) => {
  const { userName } = useParams();
  const {
    formData,
    isModified,
    handleChange,
    handleFileChange,
    updateUser, // Ensure you use this for form submission
    resetFields,
  } = useUpdateStudentForm(users);

  return (
    <div className="flex flex-col lg:flex-row bg-theme-blue m-8 p-4 rounded-xl">
      <div></div>
      <form
        encType="multipart/form-data"
        onSubmit={updateUser} // Use updateUserWithFile here
        className="w-full max-w-sm"
      >
        <div className="relative text-2xl m-4 mt-0">
          <span className="font-garet text-white">Account Details</span>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Given Name
              {formData.given_name !== users?.given_name && (
                <span className="text-red-600">*</span>
              )}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={handleChange}
              className="bg-white border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="given_name"
              type="text"
              value={formData.given_name}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Family Name
              {formData.family_name !== users?.family_name && (
                <span className="text-red-600">*</span>
              )}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={handleChange}
              className="bg-white border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="family_name"
              type="text"
              value={formData.family_name}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
              {formData.email !== users?.email && (
                <span className="text-red-600">*</span>
              )}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={handleChange}
              className="bg-white border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="email"
              type="text"
              value={formData.email}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Profile Picture
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={handleFileChange}
              className="bg-white border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="picture"
              type="file"
              name="picture"
            />
          </div>
        </div>
        {isModified && (
          <div className="flex justify-end gap-2">
            <a onClick={resetFields} className="btn flex justify-end btn-error">
              Cancel
            </a>
            <button type="submit" className="btn flex justify-end btn-accent">
              Update
            </button>
          </div>
        )}
      </form>
      <div className="flex flex-col">
        <span className="font-garet text-2xl text-white">Courses Enrolled</span>
        <StudentCoursesEnrolled userName={userName} />
      </div>
    </div>
  );
};

export default StudentUpdateForm;
