import { Filter, Hero, SearchBar } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="max-width my-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-outfit font-extrabold">Car Catalogue</h1>
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
    </div>
  );
};

export default page;
