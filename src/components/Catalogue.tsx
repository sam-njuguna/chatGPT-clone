"use client";
import { FC, useState } from "react";
import { CarCard, CarDetail } from ".";
import { CarProps } from "@/types";

interface CatalogueProps {
  allCars: CarProps[];
}

const Catalogue: FC<CatalogueProps> = ({ allCars }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarProps | null>(null);

  const openModal = (car: CarProps) => {
    setSelectedCar(car);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsOpen(false);
  };

  return (
    <section className="w-full">
      <div className="max-width">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
          {allCars.map((car: CarProps) => (
            <CarCard
              car={car}
              key={car?.model}
              onClick={() => openModal(car)}
            />
          ))}
        </div>
      </div>
      <CarDetail isOpen={isOpen} closeModal={closeModal} car={selectedCar} />
    </section>
  );
};

export default Catalogue;
