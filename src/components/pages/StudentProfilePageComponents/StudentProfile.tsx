import swal from "sweetalert";
import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

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
      <div>{users && users._id}</div>
      <div>{users && users.given_name}</div>
      <div>{users && users.family_name}</div>
      <div>{users && users.email}</div>
      <div>{users && users.createdAt}</div>
      <button
        className="bg-green-400 p-5 m-4"
        onClick={() => document.getElementById("my_modal_4").showModal()}
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
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
    </>
  );
};

export default StudentProfilePage;
