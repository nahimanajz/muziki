import Tracks from "@/Components/Album/Track/Tracks";
import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TracksPage({ tracks }) {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-col gap-[24px]">
                <NavLink href={route("album.index")}
                className=" max-w-[90px] text-base hover:text- bg-gray-700  rounded text-center items-center h-[40px] px-[24px] font-semibold">
                    Back
                </NavLink>
                <Tracks tracks={tracks} />
            </div>
        </AuthenticatedLayout>
    );
}
