"use client";
import { FC, useState } from "react";
import { SearchManufacturer } from ".";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
