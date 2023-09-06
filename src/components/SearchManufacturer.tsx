"use client";
import { manufacturers } from "@/constants";
import React, { useEffect, useRef, useState } from "react";

interface SearchManufacture {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

const SuggestionInput: React.FC<SearchManufacture> = ({
  manufacturer,
  setManuFacturer,
}) => {
  const [query, setQuery] = useState<string>(manufacturer);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isFocused = useRef<boolean>(false);

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      // Check if the click target is the input element or a suggestion
      if (
        inputRef.current &&
        (e.target === inputRef.current ||
          inputRef.current.contains(e.target as Node))
      ) {
        isFocused.current = true;
      } else {
        isFocused.current = false;
        setSuggestions([]);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setManuFacturer(inputValue);
    const filtered = manufacturers.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.length >= 3) {
      const matchedManufacturer = manufacturers.find((manufacturer) =>
        manufacturer.toLowerCase().startsWith(query.toLowerCase())
      );

      if (matchedManufacturer) {
        setQuery(matchedManufacturer);
        setSuggestions([]);
        e.preventDefault();
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a suggestion"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {isFocused.current && query === "" && (
        <ul>
          {manufacturers.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: "pointer" }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {query !== "" && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ cursor: "pointer" }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionInput;
