import { useContext, useRef, useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const email = useRef();
  const password = useRef();

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmsdZYCvUprC2wN2LJbN_lIj9GbhpTLew",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => {
        console.log('res', res)
        if (res.ok) {
          res.json().then((data) => {
            authCtx.loginHandler(data.email, data.idToken);
            history.replace("/store");
          });
        } else {
          res.json().then((data) => alert(data.error.message));
        }
      });
    } else {
      console.log('email', email.current.value)
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmsdZYCvUprC2wN2LJbN_lIj9GbhpTLew",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            authCtx.loginHandler(data.email, data.idToken);
            history.replace("/store");
          });
        } else {
          res.json().then((data) => alert(data.error.message));
        }
      });
    }
  };

  return (
    <div>
      <Form onSubmit={submitHandler} className="form">
        <FormLabel htmlFor="email">Email:</FormLabel>
        <input ref={email} id="email" type="email" />
        <br />
        <FormLabel htmlFor="password">Password:</FormLabel>
        <input ref={password} id="password" type="password" />
        <br />
        <Button type="submit" className="btn-primary">
          {isLogin ? "Login" : "Sign up"}
        </Button>
      </Form>
      <button onClick={switchHandler} className="switch">
        {isLogin
          ? "Dont't have an account? SignUp"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default Login;
