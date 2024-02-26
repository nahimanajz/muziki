import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";

const Sidebar = () => {
    return (
        <div
            className={`sidebar md:block hidden
             bg-gray-800 text-white w-64 h-full`}
        >
            <ul>
                <li className="p-4">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                </li>
                <li className="px-4 py-1 w-full active:bg-gray-700">

                <NavLink
                    className="w-full h-14 text-center hover:bg-transparent"
                    href={route("artist.index")}
                    active={route().current("artist.index")}
                >
                    Artist
                </NavLink>
                </li>
                <li className="px-4 py-2 w-full active:bg-gray-700">

                <NavLink
                    className="h-12 w-full h-14 text-center"
                    href={route("album.index")}
                    active={route().current("album.index")}
                >
                    Albums
                </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
