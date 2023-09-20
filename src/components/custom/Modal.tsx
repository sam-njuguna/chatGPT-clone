"use client";
import { FC, useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, closeModal }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  return isOpen ? (
    <div ref={modalRef} className={className}>
      {children}
    </div>
  ) : null;
};

export default Modal;
