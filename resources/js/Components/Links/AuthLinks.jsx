import NavLink from "../NavLink";

export default function AuthLinks() {
    return(
        <>
        <NavLink
            href={route("dashboard")}
            className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
            Dashboard
        </NavLink>
        <NavLink
            href={route("album.index")}
            className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
            Albums
        </NavLink>
        <NavLink
            href={route("dashboard")}
            className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
            Artists
        </NavLink>
        </>
    )
}