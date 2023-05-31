import { createContext, useState } from "react";

const AuthContext = createContext({
  email: null,
  token: null,
  isLoggedIn: false,
  loginHandler: (id) => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const prevToken = localStorage.getItem("token");
  const prevEmail = localStorage.getItem("email");
  const [emailId, setEmailId] = useState(prevEmail);
  const [idToken, setIdToken] = useState(prevToken);

  const loginHandler = (email, id) => {
    setIdToken(id);
    setEmailId(email);
    localStorage.setItem("token", id);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setIdToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const authContext = {
    email: emailId,
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
