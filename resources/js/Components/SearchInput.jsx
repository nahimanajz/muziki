import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchInput = ({ onChange }) => {
    return (
        <div className="relative">
            <input
                onChange={onChange}
                type="text"
                placeholder="Search"
                className="py-2 px-4 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
        </div>
    );
};

export default SearchInput;
