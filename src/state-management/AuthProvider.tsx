import { ReactNode, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./context/authContext";

interface Prop {
  children: ReactNode;
}
const AuthProvider = ({ children }: Prop) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
