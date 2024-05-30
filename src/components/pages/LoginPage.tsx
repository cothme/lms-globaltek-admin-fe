import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WoodBackground from "../WoodBackground";
import { useLogin } from "../hooks/useLogin";

interface userGoogle {
  family_name: string;
  given_name: string;
  email: string;
}
interface user {
  user_name: string;
  password: string;
}
const defaultFormData = {
  user_name: "",
  password: "",
};

const LoginPage = () => {
  const { loginGoogle, login, error, isLoading } = useLogin();

  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormData);
  const { user_name, password } = formData;

  const handleSignInGoogle = (input: userGoogle) => {
    loginGoogle(input);
    resetFields();
  };

  const handleSignIn = async (
    e: React.FormEvent<HTMLFormElement>,
    input: user
  ) => {
    e.preventDefault();
    await login(input);
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
  if (isLoading) {
    return (
      <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>
    );
  }
  return (
    <>
      <WoodBackground />
      <div className="relative min-w-screen min-h-screen flex items-center lg:flex-row md:flex-col sm:flex-col justify-center">
        <img
          src="src/assets/branding/linkedlearnlogoadminwhite.png"
          className=""
          alt=""
        />
        <div className="w-full max-w-xs">
          <form
            onSubmit={(e) =>
              handleSignIn(e, {
                user_name: user_name,
                password: password,
              })
            }
            className="bg-theme-maroon shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2 font-garet">
                Username
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="user_name"
                type="text"
                value={formData.user_name}
                placeholder="Username"
                role="text-field"
                data-testid="username-login-field"
              />
            </div>
            <div className="">
              <label className="block text-white text-sm font-bold mb-2 font-garet">
                Password
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                value={formData.password}
                type="password"
                placeholder="*************"
                data-testid="password-login-field"
              />
            </div>
            <div className="flex justify-center">
              <div className="flex items-center m-2">
                <button
                  disabled={isLoading}
                  className="bg-theme-blue hover:bg-theme-gold duration-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-serif"
                  type="submit"
                  data-testid="login-button"
                >
                  Sign In
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <h1 className="text-center text-xl text-white font-garet mb-2">
                Or
              </h1>
            </div>
            <div
              data-testid="google-login-button"
              className="flex justify-center"
            >
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const token = credentialResponse.credential;

                  const decode = jwtDecode<JwtPayload>(
                    String(token)
                  ) as userGoogle;
                  console.log(decode);
                  handleSignInGoogle({
                    family_name: decode.family_name,
                    given_name: decode.given_name,
                    email: decode.email,
                  });
                }}
              />
            </div>
            {error && (
              <div className="text-black bg-red-100 border-red-600 mt-4 p-2 border-2">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
