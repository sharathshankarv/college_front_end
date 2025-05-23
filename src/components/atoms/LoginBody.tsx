import { Form } from "react-bootstrap";
import CommonModal from "./Modal";

interface LoginBodyInterface {
    errors: Record<string, string>;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const LoginBody = ({inputChangeHandler,errors}: LoginBodyInterface) => {
  return (
    <CommonModal.Body>
      <Form.Group>
        <Form.Label htmlFor="inputEmail">Username</Form.Label>
        <Form.Control type="email" onChange={inputChangeHandler} id="email" />
        {errors.email !== "" && (
          <Form.Text className="text-danger">{errors.email}</Form.Text>
        )}
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password"
          onChange={inputChangeHandler}
          id="password"
        />
        {errors.password !== "" && (
          <Form.Text className="text-danger">{errors.password}</Form.Text>
        )}
      </Form.Group>
    </CommonModal.Body>
  );
};

export default LoginBody;
