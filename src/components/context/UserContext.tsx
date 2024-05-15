import { createContext, useEffect, useReducer } from "react";

interface User {
  _id: string;
  family_name: string;
  given_name: string;
  email: string;
  isFromGoogle: boolean;
  createdAt: string;
}

interface UserState {
  users: any;
  isLoading: boolean;
}

type UserAction =
  | { type: "CREATE_USER"; payload: User }
  | { type: "READ_USER"; payload: User }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "DELETE_USER"; payload: string }
  | { type: "SET_LOADING"; payload: boolean };

interface UserContextProps {
  users: any;
  isLoading: boolean;
  dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case "READ_USER":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((users: User) =>
          users._id === action.payload._id ? action.payload : users
        ),
        isLoading: false,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(
          (users: User) => users._id !== action.payload
        ),
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, {
    users: null,
    isLoading: false,
  });
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {/* {state.isLoading ? (
        <div className="grid w-full h-screen place-items-center">
          <p className="text-black font-bold text-2xl">Loading...</p>
        </div> //
      ) : (
        children
      )} */}
      {children}
    </UserContext.Provider>
  );
};
