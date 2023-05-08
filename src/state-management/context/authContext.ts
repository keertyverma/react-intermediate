import React, { Dispatch, SetStateAction } from "react";
import { AuthActionType } from "../reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthActionType>;
}

const context = React.createContext<AuthContextType>({} as AuthContextType);

export default context;
