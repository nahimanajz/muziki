import SearchForm from "@/Components/Album/SearchForm";
import AlbumTable from "@/Components/Album/Table";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function IndexPage({ auth, favoriteAlbums }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Favorite Albums" />
            {favoriteAlbums.length  === 0? (
                 <SearchForm />
            ) : (
            
                 <AlbumTable data={favoriteAlbums} />
            )}
        </AuthenticatedLayout>
    );
}
