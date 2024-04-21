import React, { useState } from "react";
import { SearchIcon, DownIcon } from "./icons";

type TInputAutocompleteProps = {
    inputPlaceholder: string;
    inputValue: string;
    inputSetvalue: (newInputValue: string) => void;
    dropdownValues: string[];
    wClassname: string;
    hClassname: string;
    icon?: "search" | "down";
};

const InputAutocomplete = ({
    inputPlaceholder,
    inputValue,
    inputSetvalue,
    dropdownValues,
    wClassname,
    hClassname,
    icon,
}: TInputAutocompleteProps) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [filteredDropdownValues, setFilteredDropdownValues] = useState(dropdownValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newInputValue = e.target.value;
        inputSetvalue(newInputValue);
        filterDropdownValues(newInputValue);
    };

    const filterDropdownValues = (newInputValue: string) => {
        if (newInputValue === "") setFilteredDropdownValues(dropdownValues);
        else {
            const filteredValues = dropdownValues.filter((item) =>
                item.toUpperCase().startsWith(newInputValue.toUpperCase())
            );
            if (filteredValues.length === 0) setFilteredDropdownValues(dropdownValues);
            else setFilteredDropdownValues(filteredValues);
        }
    };

    const renderIcon = () => {
        if (!icon) return <></>;
        else return icon === "search" ? <SearchIcon /> : <DownIcon />;
    };

    return (
        <div className="flex flex-col ">
            <div className="w-full relative">
                <input
                    type="text"
                    placeholder={inputPlaceholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => {
                        if (filteredDropdownValues.length > 0) setDropdownVisible(true);
                    }}
                    onBlur={() => setTimeout(() => setDropdownVisible(false), 100)}
                    className={`input input-bordered ${wClassname}`}
                />
                {renderIcon()}
            </div>

            <div className={`mt-1 dropdown ${dropdownVisible ? "dropdown-open" : "dropdown-close"}`}>
                <ul
                    tabIndex={0}
                    className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ${wClassname} ${hClassname} overflow-y-auto block`}
                >
                    {filteredDropdownValues.map((item) => (
                        <li key={item}>
                            <button onClick={() => inputSetvalue(item)}>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InputAutocomplete;
