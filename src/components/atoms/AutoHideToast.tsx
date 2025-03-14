import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

interface AutohideToastProps {
  title: string;
  children: string | React.ReactNode;
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  delay?: number;
  resetToast? : () => void;
}

function AutohideToast({
  title,
  children,
  variant,
  delay = 5000,
  resetToast
}: AutohideToastProps) {
  const [show, setShow] = useState(true);

  return (
    <Toast
      bg={variant}
      onClose={() => {setShow(false); resetToast && resetToast()}}
      show={show}
      delay={delay}
      autohide
      style={{position: "fixed", top: "1rem", right: "1rem", zIndex: 9999}}
    >
      <Toast.Header>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
}

export default AutohideToast;
