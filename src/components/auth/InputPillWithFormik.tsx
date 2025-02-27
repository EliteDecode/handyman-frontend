import React, { useState } from "react";
import cancel from "@/assets/icons/cancelWithGreenCircle.svg";

const MAX_TAGS = 5;
const suggestionsList: string[] = [
  "Plumbing",
  "Electrical Repairs",
  "Carpentry",
  "Painting",
  "Drywall Repair",
  "Furniture Assembly",
  "Handyman Services",
  "Appliance Installation",
  "HVAC Maintenance",
  "Window Repair",
  "Door Installation",
  "Tiling",
  "Roofing",
  "Deck Building",
  "Flooring",
  "Power Washing",
  "Fence Installation",
  "Home Renovation",
  "Basement Finishing",
  "Concrete Work",
  "Lighting Installation",
];

const InputPillWithFormik: React.FC<any> = ({
  name,
  value,
  onChange,
  onBlur,
  error,
}: any) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (tag && !value.includes(tag)) {
      onChange([...value, tag]);
    }

    setInputValue("");
    setFilteredSuggestions([]);
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag: string) => tag !== tagToRemove));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    if (val) {
      setFilteredSuggestions(
        suggestionsList.filter((s) =>
          s.toLowerCase().includes(val.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="w-full">
      {/* Tag Pills */}
      <div className="flex flex-wrap gap-2 p-2 border rounded-md">
        {value.map((tag: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-1 text-[14px] leading-[20px] tracking-[2%] font-lato bg-[#C9CDD3] rounded-[8px] min-w-[150px] w-fit px-3  justify-center h-[36px] text-[#3C3C3C]"
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
            <img
              src={cancel}
              alt="cancel"
              className="cursor-pointer"
              onClick={() => removeTag(tag)}
            />
          </div>
        ))}
        <input
          name={name}
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && (e.preventDefault(), addTag(inputValue))
          }
          onBlur={onBlur}
          placeholder="Add a tag..."
          className="flex-1 p-1 outline-none"
          disabled={value.length >= MAX_TAGS}
          maxLength={30}
        />
      </div>

      {/* Suggestions Dropdown */}
      {filteredSuggestions.length > 0 && (
        <div className="mt-2 bg-white border rounded-md shadow-md">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => addTag(suggestion)}
              className="px-3 py-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}

      {/* Warning for max tags */}

      {/* Error Message */}
      {error && <div className="mt-2 text-xs text-red-500">{error}</div>}
    </div>
  );
};

export default InputPillWithFormik;
