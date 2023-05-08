import React, { Dispatch } from "react";
import { AuthActionType } from "./AuthProvider";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthActionType>;
}

const context = React.createContext<AuthContextType>({} as AuthContextType);

export default context;
