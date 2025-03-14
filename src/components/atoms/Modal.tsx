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
CommonModal.Heading = function Heading({ children }: { children: ReactNode }){
  return <Modal.Header className="text-center" closeButton>{children}</Modal.Header>
};

CommonModal.Body = function Body({ children }: { children: ReactNode }){
  return <Modal.Body style={{padding:"20px"}}>{children}</Modal.Body>
};

CommonModal.Footer = function Footer({ children }: { children: ReactNode }){
  return <Modal.Footer className="text-center">{children}</Modal.Footer>
}

export default CommonModal;
