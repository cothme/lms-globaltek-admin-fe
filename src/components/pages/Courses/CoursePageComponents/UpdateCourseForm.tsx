import { useParams } from "react-router-dom";
import useUpdateCourse from "../../../hooks/course hooks/useUpdateCourse";
import LoadingScreen from "../../../helpers/LoadingScreen";
import useFetchTiers from "../../../hooks/tier hooks/useFetchTiers";

const UpdateCourseForm = () => {
  const { tiers } = useFetchTiers();
  const { courseId } = useParams();
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  const { formData, loading, error, handleChange, handleSubmit, errors } =
    useUpdateCourse(courseId);
  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <form
        onSubmit={handleUpdate}
        className="w-5/6 h-1/2 border border-black mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        <div className="flex flex-row gap-5">
          <div className="mb-4 w-2/3">
            <label
              htmlFor="course_title"
              className="block text-gray-700 font-bold mb-2"
            >
              Course Title
            </label>
            <input
              data-testid={`course-name`}
              role="textfield"
              type="text"
              id="course_title"
              placeholder="e.g. Introduction to Data Analysis"
              value={formData.course_title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {errors.course_title && (
              <p className="text-red-500 text-sm">{errors.course_title}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="course_description"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Description
          </label>
          <textarea
            data-testid={`course-details`}
            role="textfield"
            id="course_description"
            placeholder="Enter course description"
            value={formData.course_description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
          {errors.course_description && (
            <p className="text-red-500 text-sm">{errors.course_description}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="required_subscription"
            className="block text-gray-700 font-bold mb-2"
          >
            Subscription Type
          </label>
          <select
            data-testid={`course-subscription-type`}
            role="dropdown"
            id="required_subscription"
            value={formData.required_subscription}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            {tiers.map((tier) => (
              <option value={tier.tier_title}>{tier.tier_title}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
          <button
            data-testid={`edit-course`}
            role="button"
            type="submit"
            className="btn btn-info text-white font-bold py-2 px-4 rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateCourseForm;
