import ApplicationLogo from "../ApplicationLogo";
import NavLink from "../NavLink";
export default function GuestLinks({ auth, links, searchSection, contents }) {
    return (
        <div className="flex justify-between flex-wrap text-center items-center bg-red-400 w-full px-3">
            <div>
                <ApplicationLogo />
            </div>

            <div className="space-x-[32px]">
                <NavLink
                    href={route("register")}
                    className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Register
                </NavLink>
                <NavLink
                    href={route("login")}
                    className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Login
                </NavLink>
            </div>
        </div>
    );
}
