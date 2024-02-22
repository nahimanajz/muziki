import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";

const Sidebar = ({ isOpen }) => {
    return (
        <div
            className={`sidebar ${
                isOpen ? "block" : "hidden"
            } bg-gray-800 text-white w-64 h-full`}
        >
            {/* Sidebar content goes here */}
            <ul>
                <li className="p-4">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                </li>
                <NavLink className=" bg-gray-600 w-full h-14 text-center" href={route("artist.index")}>
                   
                    Artist
                    
                </NavLink>
                
                <NavLink 
                className="h-12 py-8"
                    //href={route("album")}
                    // active={route().current("album")}
                >
                    Albums
                </NavLink>
               
            </ul>
        </div>
    );
};

export default Sidebar;
