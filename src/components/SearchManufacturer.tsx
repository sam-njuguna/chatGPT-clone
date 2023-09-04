"use client"
import React, { FC, useState } from "react";

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer: FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const allManufacturers = [
    "Apple",
    "Samsung",
    "Google",
    "Microsoft",
    "Sony",
    "LG",
    "Lenovo",
    "Dell",
    "HP",
    "Asus",
    "Acer",
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Filter the manufacturers based on the input value
    const filteredManufacturers = allManufacturers.filter((manuf) =>
      manuf.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredManufacturers);
  };

  const handleSelectSuggestion = (selectedValue: string) => {
    setInputValue(selectedValue);
    setSuggestions([]);
    setManufacturer(selectedValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchManufacturer;
