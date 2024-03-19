import Search from "@/Components/Search";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ArtistItem from "@/Components/Artist/Artist";
import { useCallback, useEffect, useState } from "react";
import Table from "@/Components/Artist/Table";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";
import { router } from "@inertiajs/react";

export default function Artist({ auth, artists, favoriteArtists }) {
    const [showFavorite, setShowFavorite] = useState(true);
    const [pageData, setPageData] = useState(favoriteArtists.data);
    
    const currentPage =  favoriteArtists.current_page
    const totalPages = favoriteArtists.total;

    const toggleShowFavorite = () => setShowFavorite(!showFavorite);

    const handlePageChange = useCallback(
        (pageNumber) => {
            const url = route("artist.index", { page: pageNumber });
            router.visit(url, {
                onSuccess: ({ props: { favoriteArtists } }) => {
                    setPageData(favoriteArtists.data);
                },
            });
        },
        [pageData]
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Artist
                </h2>
            }
        >
            <PrimaryButton
                className="mb-12 float-end relative"
                onClick={toggleShowFavorite}
            >
                {showFavorite ? "Add Favorite" : "Show Favorites"}
            </PrimaryButton>
            {!showFavorite ? (
                <>
                    <div className="bg-gray-50">
                        <Search />
                    </div>

                    <div className="min-h-2/5 h-full bg-white justify-center flex flex-wrap gap-[20px] py-[48px]">
                        {artists &&
                            artists.map((artist, index) => (
                                <ArtistItem
                                    auth={auth}
                                    artist={artist}
                                    key={index}
                                />
                            ))}
                    </div>
                </>
            ) : (
                <div className="p-auto mt-[24px]">
                    <Table data={pageData} />

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </AuthenticatedLayout>
    );
}
