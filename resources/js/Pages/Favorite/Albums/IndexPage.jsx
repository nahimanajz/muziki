import AlbumTable from "@/Components/Album/Table";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";

export default function IndexPage({favoriteAlbums}){
    return(
        <AuthenticatedLayout>
              <Head title="Favorite Albums" />
                <AlbumTable data={favoriteAlbums}/>
        </AuthenticatedLayout>
    )
}