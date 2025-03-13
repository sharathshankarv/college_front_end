"use client";

import React, { ReactNode } from "react";
import Modal from "react-bootstrap/Modal";

type CommonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CommonModal = ({ children, isOpen, onClose }: CommonModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onHide={onClose}>
      {children}
    </Modal>
  );
};

// Named exports for Heading, Body, and Footer
CommonModal.Heading = ({ children }: { children: ReactNode }) => (
  <Modal.Header className="text-center" closeButton>{children}</Modal.Header>
);

CommonModal.Body = ({ children }: { children: ReactNode }) => (
  <Modal.Body style={{padding:"20px"}}>{children}</Modal.Body>
);

CommonModal.Footer = ({ children }: { children: ReactNode }) => (
  <Modal.Footer className="text-center">{children}</Modal.Footer>
);

export default CommonModal;
