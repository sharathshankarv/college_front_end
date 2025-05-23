import React from "react";
import CommonModal from "@/components/atoms/Modal";
import LoginForm from "../atoms/LoginForm";

interface LoginModalProps {
  isLoginModalOpen: boolean;
  setLoginModalOpen: (val: boolean) => void;
}

function LoginModal({ isLoginModalOpen, setLoginModalOpen }: LoginModalProps) {
  return (
    <>
      <CommonModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      >
        <LoginForm setLoginModalOpen={setLoginModalOpen} />
      </CommonModal>
    </>
  );
}

export default LoginModal;
