"use client";

import React, { useState } from "react";
import Headers from "@/components/molecules/Header";
import LoginModal from '@/components/molecules/LoginModal';

function LandingClientWrapper() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <Headers authHandler={setLoginModalOpen} />
      <LoginModal isLoginModalOpen={isLoginModalOpen} setLoginModalOpen={setLoginModalOpen} />
    </>
  );
}

export default LandingClientWrapper;
