import { useParams } from "react-router-dom";
import useFetchTopic from "../../hooks/module hooks/useFetchTopic";
import useDeleteTopic from "../../hooks/module hooks/useDeleteTopic";

const ModuleOverview = () => {
  const { topicName } = useParams();
  const { topic, loading, error } = useFetchTopic(topicName);
  const { handleDelete } = useDeleteTopic(
    String(topicName),
    String(topic?.parent_course)
  );

  const handleUpdate = () => {
    // Logic for updating the topic
    console.log("Update button clicked");
  };

  const handleUploadPDF = () => {
    // Logic for uploading the PDF
    console.log("Upload PDF button clicked");
  };

  const handleUploadVideo = () => {
    // Logic for uploading the video
    console.log("Upload Video button clicked");
  };

  const handleDeletePDF = () => {
    // Logic for deleting the PDF
    console.log("Delete PDF button clicked");
  };

  const handleDeleteVideo = () => {
    // Logic for deleting the video
    console.log("Delete Video button clicked");
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
      <div className="mb-2 flex items-center gap-4">
        <strong>PDF:</strong>
        {topic?.pdf ? (
          <>
            <embed
              width="500"
              height="375"
              src={topic.pdf}
              className="text-blue-500 underline"
            />
            <button
              onClick={handleDeletePDF}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete PDF
            </button>
          </>
        ) : (
          <button
            onClick={handleUploadPDF}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload PDF
          </button>
        )}
      </div>
      <div className="mb-4 flex items-center gap-4">
        <strong>Video:</strong>
        {topic?.video ? (
          <>
            <video width="320" height="240" controls>
              <source src={topic.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={handleDeleteVideo}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete Video
            </button>
          </>
        ) : (
          <button
            onClick={handleUploadVideo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload Video
          </button>
        )}
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
