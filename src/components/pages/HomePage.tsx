import useAuthContext from "../hooks/useAuthContext";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HomePage = () => {
  const { user } = useAuthContext();
  const percentage = 20;
  return (
    <>
      <div className="">
        <div className="text-4xl font-garet m-4">
          Hello,{" "}
          <span className="font-garetheavy text-theme-maroon">
            {user.given_name}
          </span>
          !
        </div>
        <div className="flex md:flex-row flex-col">
          <div
            className="bg-gradient-to-r from-theme-maroon from-25% via-theme-gold via-100% 
          w-full
          text-white
          p-6 m-4 h-1/4
          md:rounded-s-full
          hover:scale-75
          duration-500"
          >
            <div className="font-garet text-center text-3xl">Students</div>
            <div className="font-garetheavy text-center text-4xl mt-4">1K+</div>
          </div>
          <div
            className="bg-gradient-to-r from-theme-gold from-25% via-theme-gold via-100% 
          w-full
          text-white
          p-6 m-4 h-1/4
          hover:scale-75
          duration-500"
          >
            <div className="font-garet text-center text-3xl">Courses</div>
            <div className="font-garetheavy text-center text-4xl mt-4">23</div>
          </div>
          <div
            className="bg-gradient-to-r from-theme-gold from-25% via-theme-maroon via-100% 
          w-full
          text-white
          p-6 m-4 h-1/4
          md:rounded-e-full
          hover:scale-75
          duration-500"
          >
            <div className="font-garet text-center text-3xl">Admin</div>
            <div className="font-garetheavy text-center text-4xl mt-4">1</div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-garet m-4">
        Recent <span className="font-garetheavy text-theme-gold">Students</span>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center">
        <div className="w-1/4 flex flex-row">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: "#8B2635",
              textColor: "#8B2635",
            })}
            className="h-20"
            value={percentage}
            text={`${percentage}`}
          />
          <CircularProgressbar
            styles={buildStyles({
              pathColor: "#8B2635",
              textColor: "#8B2635",
            })}
            className=" h-20"
            value={percentage}
            text={`${percentage}`}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
