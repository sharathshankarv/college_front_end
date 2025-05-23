"use client";
import { useRouter } from "next/navigation";
import { useLoginMutation, useMeQuery } from "@/redux/apis/authApi";
import { setCredentials } from "@/redux/slices/authSlice";
import { getErrorMessage } from "@/utils/errorHandler";
import { validateForm } from "@/utils/validation";
import { useMemo, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CommonModal from "./Modal";
import AutohideToast from "./AutoHideToast";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";

interface LoginFormInterface {
  setLoginModalOpen?: (val: boolean) => void;
}

const LoginForm = ({ setLoginModalOpen }: LoginFormInterface) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [login, { isLoading }] = useLoginMutation();
  const { refetch } = useMeQuery();
  const initLoginState = useMemo(() => ({ email: "", password: "" }), []);
  const [loginDetails, setLoginDetails] = useState(initLoginState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });
  const [toast, setToast] = useState<{
    variant: "danger";
    title: string;
    message: string;
  } | null>(null);

  function resetToast() {
    setToast(null);
  }

  const validationRules = {
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: {
      required: true,
      minLength: 8,
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const { isValid, errors } = validateForm(
      { ...loginDetails, [id]: value },
      validationRules
    );
    if (!isValid) setErrors(errors);
    else setErrors({ ...errors, [id]: "" });

    setLoginDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, errors } = validateForm(loginDetails, validationRules);
    if (!isValid) {
      setErrors(errors);
      return;
    }

    try {
      const response = await login({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }).unwrap();
      if (response.token) {
        dispatch(setCredentials({ user: response.user }));
        !!setLoginModalOpen ? setLoginModalOpen(false) : router.push("/");
        setLoginDetails(initLoginState);
        refetch();
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setLoginDetails(initLoginState);
      setToast({ variant: "danger", title: "Error", message: errorMessage });
    }
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className={`${!!setLoginModalOpen ? "w-100" : "w-50 mx-auto"}`}
      >
        <LoginHeader isModal={!!setLoginModalOpen} />
        <LoginBody errors={errors} inputChangeHandler={handleInputChange} />

        <CommonModal.Footer>
          <Row className="justify-content-md-center w-100">
            {setLoginModalOpen && (
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
            )}
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
};

export default LoginForm;
