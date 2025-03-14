import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useLoginMutation } from "@/redux/slices/authApi";
import CommonModal from "@/components/atoms/Modal";
import AutohideToast from "@/components/atoms/AutoHideToast";
import { getErrorMessage } from "@/utils/errorHandler";

interface LoginModalProps {
  isLoginModalOpen: boolean;
  setLoginModalOpen: (val: boolean) => void;
}

function LoginModal({ isLoginModalOpen, setLoginModalOpen }: LoginModalProps) {
  const [login, { isLoading }] = useLoginMutation();
  const [toast, setToast] = useState<{
    variant: "danger";
    title: string;
    message: string;
  } | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login({
        email: "test@example.com",
        password: "password",
      }).unwrap();
      console.log("Login successful:", response);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setToast({ variant: "danger", title: "Error", message: errorMessage });
    }
  };

  function resetToast() {
    setToast(null);
  }

  return (
    <>
      <CommonModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      >
        <form onSubmit={handleLogin}>
          <CommonModal.Heading>
            <h3>Login</h3>
          </CommonModal.Heading>
          <CommonModal.Body>
            <Form.Label htmlFor="inputEmail">Username</Form.Label>
            <Form.Control type="email" id="inputEmail" />
            <br />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control type="password" id="inputPassword5" />
          </CommonModal.Body>
          <CommonModal.Footer>
            <Row className="justify-content-md-center w-100">
              <Col>
                <button
                onClick={() => setLoginModalOpen(false)}
                  type="button"
                  className="btn btn-secondary w-100"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </Col>
              <Col>
                <button
                  type="submit"
                  className="btn btn-primary mr-auto  w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </Col>
            </Row>
          </CommonModal.Footer>
        </form>
      </CommonModal>
      {toast && (
        <AutohideToast
          variant={toast.variant}
          title={toast.title}
          resetToast={resetToast}
        >
          <p>{toast.message}</p>
        </AutohideToast>
      )}
    </>
  );
}

export default LoginModal;
