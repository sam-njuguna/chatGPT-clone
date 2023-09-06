"use client";
import { FC, useEffect, useRef } from "react";
import { CarProps } from "@/types";
import { HiX } from "react-icons/hi";
interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps | null;
}

const CarDetail: FC<CarDetailProps> = ({ isOpen, closeModal, car }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 bg-black/10  backdrop-blur-[2px] flex items-center justify-center z-50">
      <div
        className="max-w-3xl w-full mx-auto h-[75vh]  bg-white rounded-lg shadow-md "
        ref={modalRef}
      >
        <div className=" mx-4 px-6 pb-6 pt-10 relative w-full ">
          <h2 className="text-xl font-bold mb-4">{car?.model}</h2>
          <button
            className=" absolute right-10 cursor-pointer top-3 h-[40px] w-[40px] flex justify-center items-center rounded-full hover:bg-gray-200/40 duration-200"
            onClick={closeModal}
          >
            <HiX className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
