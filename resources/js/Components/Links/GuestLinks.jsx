import { useState } from "react";
import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";

export default function GuestLinks({ auth, links, searchSection, contents }) {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const menuClx = "font-semibold ";

    return (
        <div className="flex justify-between flex-col md:flex-row flex-wrap text-center items-center bg-slate-700 w-full px-3 md:py-0 py-6 gap-[12px]">
            <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 absolute right-3 top-1 md:hidden"
                onClick={toggleMenu}
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        fill="#ffffff"
                        fillRule="evenodd"
                        d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2h-8a1 1 0 100 2h8zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2h-8a1 1 0 100 2h8z"
                    ></path>{" "}
                </g>
            </svg>
            {!showMenu && (
                <>
                    <div>
                        <ApplicationLogo />
                    </div>
                    <div className="md:space-x-[32px] flex flex-col md:flex-row gap-[12px]">
                        <NavLink href={route("find.album")} className={menuClx}  active={route().current("find/album")}>
                            Album
                        </NavLink>
                        <NavLink href={"/"} className={menuClx} active={route().current("/")}>
                            Artist
                        </NavLink>
                    </div>

                    <div className="md:space-x-[32px] flex flex-col md:flex-row gap-[12px]">
                        <NavLink href={route("register")} active={route().current("register")} className={menuClx} >
                            Register
                        </NavLink>
                        <NavLink href={route("login")} active={route().current("login")} className={menuClx}>
                            Login
                        </NavLink>
                    </div>
                </>
            )}
        </div>
    );
}
