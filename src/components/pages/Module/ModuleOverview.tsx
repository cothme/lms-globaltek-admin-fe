import { useParams } from "react-router-dom";
import useFetchTopic from "../../hooks/module hooks/useFetchTopic";

const ModuleOverview = () => {
  const { topicName } = useParams();
  const { topic, loading, error } = useFetchTopic(topicName);

  const handleUpdate = () => {
    // Logic for updating the topic
    console.log("Update button clicked");
  };

  const handleDelete = () => {
    // Logic for deleting the topic
    console.log("Delete button clicked");
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">{topic?.topic_title}</h1>
      <div className="mb-2">
        <strong>Parent Course:</strong> {topic?.parent_course}
      </div>
      <div className="mb-2">
        <strong>Description:</strong> {topic?.topic_description}
      </div>
      <div className="mb-2">
        <strong>PDF:</strong>{" "}
        <a href={topic?.pdf} className="text-blue-500 underline">
          {topic?.pdf}
        </a>
      </div>
      <div className="mb-4">
        <strong>Video:</strong>{" "}
        <a href={topic?.video} className="text-blue-500 underline">
          {topic?.video}
        </a>
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ModuleOverview;
