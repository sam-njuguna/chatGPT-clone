import { Catalogue, Filter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import React from "react";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(allCars);
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="w-full relative my-12">
        <div className="max-width">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-outfit font-extrabold">
              Car Catalogue
            </h1>
            <p>Explore out cars you might like</p>
          </div>
          <div className="flex justify-between">
            <SearchBar />
            <div className="flex gap-10">
              <Filter title="Fuel" />
              <Filter title="Year" />
            </div>
          </div>
        </div>
        {!isDataEmpty ? (
          <Catalogue allCars={allCars} />
        ) : (
          <div className="max-width">
            <div className="mt-16 flex justify-center items-center flex-col gap-2">
              <h2 className="text-[20px]">Oop, no result</h2>
              <p>{allCars?.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
