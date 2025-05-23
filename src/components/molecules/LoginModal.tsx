import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CommonModal from "@/components/atoms/Modal";
import AutohideToast from "@/components/atoms/AutoHideToast";
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
