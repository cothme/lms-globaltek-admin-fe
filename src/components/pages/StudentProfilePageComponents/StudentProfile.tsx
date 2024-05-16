import swal from "sweetalert";
import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/branding/linkedlearnlogonotextwhite.png";

interface User {
  _id: string;
  family_name: string;
  given_name: string;
  email: string;
  isFromGoogle: boolean;
  createdAt: string;
}
interface updateUser {
  family_name: string;
  given_name: string;
  email: string;
}
interface UserProp {
  users: User | null;
}
const defaultFormData = {
  family_name: "",
  given_name: "",
  email: "",
};

const StudentProfilePage: React.FC<UserProp> = ({ users }: UserProp) => {
  const [formData, setFormData] = useState(defaultFormData);
  const { family_name, given_name, email } = formData;
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const updateUser = async (input: updateUser) => {
    const response = await fetch(
      `http://localhost:4000/api/user/${users?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify(input),
      }
    );
    const json = await response.json();

    if (!response.ok) {
    }
    if (response.ok) {
    }
  };
  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>,
    input: updateUser
  ) => {
    e.preventDefault();
    await updateUser(input);
    resetFields();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const resetFields = () => {
    setFormData(defaultFormData);
  };
  const deleteStudent = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/user/${users?._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        console.log("Delete Success");
      } else {
        setError(json.message || "Failed to delete the profile");
      }
    } catch (err) {
      console.log("eerrrorr");

      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const deletePrompt = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Delete"],
    }).then((willDelete) => {
      if (willDelete) {
        deleteStudent();
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate("/students");
      }
    });
  };
  return (
    <>
      <div className="relative min-w-screen min-h-screen flex items-center justify-center lg:flex-row md:flex-col sm:flex-col">
        <div className="outline h-[32rem] flex flex-col items-center w-80 shadow-xl rounded-2xl bg-theme-maroon">
          {/* Header */}
          <div className="bg-theme-gold rounded-t-2xl w-full h-14 flex flex-row gap-2 items-center">
            <div>
              <img src={Logo} className="w-14 ml-4" alt="Logo" />
            </div>
            <div className="text-2xl mr-4 font-garetheavy text-white"></div>
          </div>
          {/* Profile Content */}
          <div className="mt-8 w-40">
            <img
              className="rounded-xl"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="User profile"
            />
          </div>
          <div className="text-white text-center mt-4 text-3xl font-garetheavy">
            {`${users?.given_name} ${users?.family_name}`}
          </div>
          <div className="text-white text-center text-xl font-garet">
            Student
          </div>
          <div className="text-theme-gold text-center mt-4 text-md font-garet">
            <span className="text-white font-garet">Email: </span>
            {users?.email}
          </div>
          <div className="text-theme-gold text-center mt-4 text-md font-garet">
            <span className="text-white font-garet">ID: </span>
            {users?._id}
          </div>
          <div className="bg-theme-gold rounded-b-2xl w-full h-20 mt-auto flex items-center justify-center">
            <div className="text-center text-sm font-garet text-white">
              © 2024 LinkedLearn
            </div>
          </div>
        </div>
        <button
          className="bg-green-400 p-5 m-4"
          onClick={() =>
            document.getElementById("my_modal_4")?.showModal() as HTMLElement
          }
        >
          UPDATE
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Update User</h3>
            <p className="py-4">Click the button below to close</p>
            <form
              onSubmit={(e) => {
                handleRegister(e, {
                  given_name: given_name,
                  family_name: family_name,
                  email: email,
                });
              }}
              className="flex flex-col gap-4"
            >
              <label htmlFor="first_name">First Name</label>
              <input onChange={onChange} id="given_name" type="text" />
              <label htmlFor="last_name">Last Name</label>
              <input onChange={onChange} id="family_name" type="text" />
              <label htmlFor="email">Email</label>
              <input onChange={onChange} id="email" type="text" />
              <button type="submit" className="btn bg-green-700 text-white">
                Update
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <button onClick={() => deletePrompt()} className="bg-red-500 p-5 m-4">
          DELETE
        </button>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </>
  );
};

export default StudentProfilePage;
