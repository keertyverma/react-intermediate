interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthActionType = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthActionType): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return user;
  }
};

export default authReducer;
