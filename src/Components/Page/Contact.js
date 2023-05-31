import { useRef } from "react";
import { Form, FormLabel, Button } from "react-bootstrap";

const Contact = () => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const fetchFunc = async (contact) => {
    await fetch(
      "https://ecommerce-16809-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
      }
    );
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const contact = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };
    fetchFunc(contact);
  };

  return (
    <Form onSubmit={onSubmitHandler} style={{ padding: "5rem" }}>
      <FormLabel htmlFor="name">Name: </FormLabel>
      <input ref={name} id="name" />
      <br />
      <FormLabel htmlFor="email">Email: </FormLabel>
      <input ref={email} id="email" />
      <br />
      <FormLabel htmlFor="phone">Phone: </FormLabel>
      <input ref={phone} id="phone" />
      <br />
      <Button type="submit">SUBMIT</Button>
    </Form>
  );
};

export default Contact;
