import Form from "react-bootstrap/Form";
import CommonModal from "@/components/atoms/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface LoginModalProps {
  isLoginModalOpen: boolean;
  setLoginModalOpen: (val: boolean) => void;
}

function LoginModal({ isLoginModalOpen, setLoginModalOpen }: LoginModalProps) {
  return (
    <CommonModal
      isOpen={isLoginModalOpen}
      onClose={() => setLoginModalOpen(false)}
    >
      <form>
        <CommonModal.Heading>
          <h3>Login</h3>
        </CommonModal.Heading>
        <CommonModal.Body>
          <Form.Label htmlFor="inputPassword5">Username</Form.Label>
          <Form.Control
            type="email"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <br />
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </CommonModal.Body>
        <CommonModal.Footer>
          <Row className="justify-content-md-center w-100">
            <Col>
              <button
                type="button"
                className="btn btn-secondary w-100"
                data-dismiss="modal"
              >
                Close
              </button>
            </Col>
            <Col>
              <button type="button" className="btn btn-primary mr-auto  w-100">
                Login
              </button>
            </Col>
          </Row>
        </CommonModal.Footer>
      </form>
    </CommonModal>
  );
}

export default LoginModal;
