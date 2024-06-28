import { IoMdAdd } from "react-icons/io";

const ModulesMainPage = () => {
  return (
    <>
      <div>
        <button className="btn btn-success font-garet">
          <IoMdAdd /> Add course
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-box">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Module Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModulesMainPage;
