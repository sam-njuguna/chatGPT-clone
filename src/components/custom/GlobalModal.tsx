"use client";
import { FC, useEffect, useRef } from "react";

interface ModalProps {
  isOpen: string;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
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
    <div className="absolute w-full supports-[height:100dvh]:h-[100dvh]">
      <div ref={modalRef} className={className}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
