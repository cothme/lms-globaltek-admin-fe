import React from "react";

const CourseTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Publisher</th>
              <th>Is Published</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>IT0041</td>
              <td>Business Analytics</td>
              <td>Dencel Cosme</td>
              <td>
                <span className="bg green-100 font-bold text-white bg-red-500 p-1 rounded-xl px-10">
                  No
                </span>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">More Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourseTable;
