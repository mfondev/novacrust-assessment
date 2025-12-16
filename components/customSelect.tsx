"use client";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiSearch } from "react-icons/ci";

export interface SelectOption {
  label: string;
  value: string;
  icon?: string;
}

export interface SelectWalletProps {
  options: SelectOption[];
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
  showSearch?: boolean;
  dropdownOffset?: number;
  highlightSelected?: boolean;
}

export function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  fullWidth = false,
  showSearch = false,
  dropdownOffset,
  highlightSelected = false,
}: SelectWalletProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`${
          fullWidth ? "w-full p-6" : "w-fit"
        } rounded-full border border-[#E0E0E0] ${
          value ? "font-clash" : "font-outfit"
        } ${highlightSelected && value ? "bg-[#F7F7F7]" : ""}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent sideOffset={dropdownOffset ?? 4}>
        {showSearch && (
          <div className="flex items-center gap-2 px-4 py-3 border border-[#E0E0E0] rounded-[30px] mb-2">
            <Image
              src="/assets/icons/search.png"
              alt="Search"
              width={16}
              height={16}
              className="w-5 h-5 object-cover"
            />

            <input
              type="text"
              placeholder="Search"
              className="flex-1 text-sm outline-none bg-transparent border-none font-outfit
                 placeholder:font-outfit
    placeholder:font-normal
    placeholder:text-[14px]
    placeholder:leading-3.5
    placeholder:tracking-normal
    placeholder:text-[#828282]"
            />
          </div>
        )}
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <div className="flex items-center gap-2">
              {option.icon && (
                <img
                  src={option.icon}
                  alt={option.label}
                  className="w-5 h-5 rounded-full"
                />
              )}
              {option.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
