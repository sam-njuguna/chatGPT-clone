"use client";
import { useModal } from "@/provider/ModalContext";
import { FC, useEffect, useRef } from "react";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen: boolean;
}

const MdModal: FC<ModalProps> = ({ children, className, isOpen }) => {
  const { isKey } = useModal();
  return isOpen ? <div className={className}>{children}</div> : null;
};

export default MdModal;
