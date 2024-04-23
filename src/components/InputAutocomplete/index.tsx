import React, { useEffect, useState } from "react";
import { SearchIcon, DownIcon, HistoryIcon } from "../utils/icons";
import { LS_DELIMITER, sanitizeDelimiter } from "@/utils";

type TInputAutocompleteProps = {
    inputPlaceholder: string;
    inputValue: string;
    inputSetvalue: (newInputValue: string) => void;
    dropdownValues: string[];
    wClassname: string;
    hClassname: string;
    divClassOverride?: string;
    icon?: "search" | "down" | "none";
};

const InputAutocomplete = ({
    inputPlaceholder,
    inputValue,
    inputSetvalue,
    dropdownValues,
    wClassname,
    hClassname,
    divClassOverride = "",
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
        if (!icon || icon === "none") return <></>;
        else if (icon === "search") return <SearchIcon />;
        else if (icon === "down") return <DownIcon />;
    };

    useEffect(() => setFilteredDropdownValues(dropdownValues), [dropdownValues]);

    return (
        <div className={`${divClassOverride} flex flex-col`}>
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
                    className={`dropdown-content z-[10] menu p-2 shadow bg-base-200 rounded-box ${wClassname} ${hClassname} overflow-y-auto block`}
                >
                    {filteredDropdownValues.map((item) => {
                        if (item.includes(LS_DELIMITER)) {
                            return (
                                <li key={item}>
                                    <button
                                        className="flex justify-between items-center"
                                        onClick={() =>
                                            inputSetvalue(sanitizeDelimiter(item).toUpperCase())
                                        }
                                    >
                                        <span> {sanitizeDelimiter(item).toUpperCase()} </span>
                                        <div>
                                            <HistoryIcon />
                                        </div>
                                    </button>
                                </li>
                            );
                        } else {
                            return (
                                <li key={item}>
                                    <button onClick={() => inputSetvalue(item.toUpperCase())}>
                                        {item.toUpperCase()}
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default InputAutocomplete;
