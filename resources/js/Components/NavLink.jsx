import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex  items-center px-1 pt-1 border-b-[.5px] text-base font-semibold  leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-gray-400 "
                    : "border-transparent text-white hover:bg-gray-700 focus:text-gray-900  focus:text-white") +
                className
            }
        >
            {children}
        </Link>
    );
}
