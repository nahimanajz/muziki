import GuestLinks from "@/Components/Links/GuestLinks";

export default function Guest({ searchSection, contents, ...rest }) {
    return (
        <div className="w-full h-screen">
            <div className="h-auto">
                <GuestLinks />{" "}
            </div>
            {searchSection ? (
                <div className="h-auto bg-slate-300">{searchSection}</div>
            ) : null}
            <div className="min-h-2/5 h-full bg-white justify-center flex flex-wrap gap-[20px] py-[48px]">
                {contents ?? rest.children}
            </div>
        </div>
    );
}
