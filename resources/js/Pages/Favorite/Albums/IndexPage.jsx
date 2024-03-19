import SearchForm from "@/Components/Album/SearchForm";
import AlbumTable from "@/Components/Album/Table";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function IndexPage({ auth, favoriteAlbums }) {
    const [showFavorite, setShowFavorite] = useState(true);

    const toggleShowFavorite = () => setShowFavorite(!showFavorite);

    useEffect(() => {
        if (favoriteAlbums.length === 0) {
            toggleShowFavorite()
        }
    },[]);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Favorite Albums" />

            <div className="mt-5">
                <PrimaryButton
                    className={`{mb-12 float-end ${showFavorite?"relative mb-4":"absolute mt-4 right-7"}   }`}
                    onClick={toggleShowFavorite}
                >
                    {showFavorite ? "Add Favorite" : "Show Favorites"}
                </PrimaryButton>

                {showFavorite ? (
                    <AlbumTable data={favoriteAlbums} />
                ) : (
                    <SearchForm />
                )}
            </div>
        </AuthenticatedLayout>
    );
}
