import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";
export default function GuestLinks({ auth, links, searchSection, contents }) {
    const menuClx = "font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
    return (
        <div className="flex justify-between flex-wrap text-center items-center bg-red-400 w-full px-3">
            <div>
                <ApplicationLogo />
            </div>
            <div className="space-x-[32px]">
                <NavLink
                    href={route("find.album")}
                    className={menuClx}
                >
                    Album
                </NavLink>
                <NavLink
                    //href={route("artist")}
                    className={menuClx}
                >
                    Artist
                </NavLink>
            </div>

            <div className="space-x-[32px]">
                <NavLink
                    href={route("register")}
                    className={menuClx}
                >
                    Register
                </NavLink>
                <NavLink
                    href={route("login")}
                    className={menuClx}
                >
                    Login
                </NavLink>
            </div>
        </div>
    );
}
