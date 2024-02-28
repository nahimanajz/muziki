import NavLink from "./NavLink";

export default function ApplicationLogo(props) {
    return (
        <NavLink href="/">
            <div className="text-[30px] bg-slate-700 font-bold text-white py-3 px-2 ">
                Muziki
            </div>
        </NavLink>
    );
}
