"use client";
import { useModal } from "@/provider/ModalContext";
import { FC, useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;
  return isOpen ? (
    <div ref={modalRef} className={className}>
      {children}
    </div>
  ) : null;
};

export default Modal;
