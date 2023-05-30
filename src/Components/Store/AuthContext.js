import { createContext, useState } from "react";

const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  loginHandler: (id) => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [idToken, setIdToken] = useState(null);

  const loginHandler = (id) => {
    setIdToken(id);
    localStorage.setItem("token", id);
  };

  const logoutHandler = () => {
    setIdToken(null);
    localStorage.removeItem("token");
  };

  const authContext = {
    token: idToken,
    isLoggedIn: !!idToken,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
