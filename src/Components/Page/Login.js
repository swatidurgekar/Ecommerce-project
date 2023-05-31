import { useContext, useRef } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const email = useRef();
  const password = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlZyDYZo4QLVRkyBpqcRzuhBHMvTFQFgQ",
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
  };

  return (
    <Form onSubmit={submitHandler} className="form" style={{ padding: "5rem" }}>
      <FormLabel htmlFor="email">Email:</FormLabel>
      <input ref={email} id="email" type="email" />
      <br />
      <FormLabel htmlFor="password">Password:</FormLabel>
      <input ref={password} id="password" type="password" />
      <br />
      <Button type="submit" className="btn-primary">
        Sign in
      </Button>
    </Form>
  );
};

export default Login;
