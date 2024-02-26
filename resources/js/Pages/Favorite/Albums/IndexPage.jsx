import AlbumTable from "@/Components/Album/Table";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function IndexPage({ favoriteAlbums }) {
    return (
        <AuthenticatedLayout>
            <Head title="Favorite Albums" />
            {favoriteAlbums.length  === 0? (
                <Link className=" bg-gray-800 text-white text-base font-medium px-[32px] py-[16px] rounded-md my-[24px]" href={route("find.album")}>
                    {" "}
                    Add Album
                </Link>
            ) : (
            
                 <AlbumTable data={favoriteAlbums} />
            )}
        </AuthenticatedLayout>
    );
}
