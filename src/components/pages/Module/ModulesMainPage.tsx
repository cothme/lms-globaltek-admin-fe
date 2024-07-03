import { IoMdAdd } from "react-icons/io";
import useFetchTopics from "../../hooks/module hooks/useFetchTopics";
import { useParams } from "react-router-dom";
import useCreateTopic from "../../hooks/module hooks/useCreateTopic";

const ModulesMainPage = () => {
  const { createTopic, handleChange, handleFileChange, formData, errors } =
    useCreateTopic();
  const handleCreateTopic = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTopic();
  };
  const { courseId } = useParams();
  const { topics, loading, error } = useFetchTopics(String(courseId));

  return (
    <>
      <div>
        <button
          className="btn btn-success font-garet"
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            ).showModal()
          }
        >
          <IoMdAdd /> Add Topic
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="w-full mx-auto">
              <form
                onSubmit={handleCreateTopic}
                className="border border-black p-4 bg-white shadow-md rounded-lg"
              >
                <div className="mb-4">
                  <label
                    htmlFor="topic_title"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Topic Title
                  </label>
                  <input
                    type="text"
                    id="topic_title"
                    placeholder="Enter topic title"
                    value={formData.topic_title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  {errors.topic_title && (
                    <p className="text-red-500 text-sm">{errors.topic_title}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="topic_description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Topic Description
                  </label>
                  <textarea
                    id="topic_description"
                    placeholder="Enter topic description"
                    value={formData.topic_description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  {errors.topic_description && (
                    <p className="text-red-500 text-sm">
                      {errors.topic_description}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="pdf"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    PDF File
                  </label>
                  <input
                    type="file"
                    id="pdf"
                    name="pdf"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  {errors.pdf && (
                    <p className="text-red-500 text-sm">{errors.pdf}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="video"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Video File
                  </label>
                  <input
                    type="file"
                    id="video"
                    name="video"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  {errors.video && (
                    <p className="text-red-500 text-sm">{errors.video}</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="btn btn-info hover:bg-neutral text-white font-bold py-2 px-4 rounded-lg"
                    // disabled={loading}
                  >
                    Create Topic
                  </button>
                </div>

                {error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
      <div className="w-1/2 overflow-x-auto bg-white rounded-box mt-4">
        {loading ? (
          <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
            Loading...
          </div>
        ) : error ? (
          <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
            {error}
          </div>
        ) : !topics?.length ? (
          <div className="text-black font-garet text-center text-4xl m-4 bg-white rounded-xl p-4">
            No topics available
          </div>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Module Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, index) => (
                <tr key={topic._id}>
                  <th>{index + 1}</th>
                  <td>{topic.topic_title}</td>
                  <td>{topic.topic_description}</td>
                  <td>
                    <a href={`/${topic.topic_title}`} className="btn btn-ghost">
                      More Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ModulesMainPage;
