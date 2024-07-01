import { IoMdAdd } from "react-icons/io";

const ModulesMainPage = () => {
  return (
    <>
      <div>
        <button className="btn btn-success font-garet">
          <IoMdAdd /> Add course
        </button>
      </div>
      <div className="w-1/2 overflow-x-auto bg-white rounded-box">
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td className="btn btn-ghost ">More Details</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModulesMainPage;
