import SearchForm from "@/Components/Album/SearchForm";
import AlbumTable from "@/Components/Album/Table";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useCallback, useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

export default function IndexPage({ auth, favoriteAlbums }) {
    const [showFavorite, setShowFavorite] = useState(true);
    const [pageData, setPageData] = useState(favoriteAlbums.data);

    const currentPage = favoriteAlbums.current_page;
    const totalPages = favoriteAlbums.total;

    const handlePageChange = useCallback(
        (pageNumber) => {
            const url = route("album.index", { page: pageNumber });
            router.visit(url, {
                onSuccess: ({ props: { favoriteAlbums } }) => {
                    setPageData(favoriteAlbums.data);
                },
            });
        },
        [pageData]
    );
    const toggleShowFavorite = () => setShowFavorite(!showFavorite);

    useEffect(() => {
        if (favoriteAlbums.length === 0) {
            toggleShowFavorite();
        }
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Favorite Albums" />

            <div className="mt-5">
                <PrimaryButton
                    className={`{mb-12 float-end ${
                        showFavorite ? "relative mb-4" : "absolute mt-4 right-7"
                    }   }`}
                    onClick={toggleShowFavorite}
                >
                    {showFavorite ? "Add Favorite" : "Show Favorites"}
                </PrimaryButton>

                {showFavorite ? (
                    <>
                        <AlbumTable data={pageData} />

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                ) : (
                    <SearchForm />
                )}
            </div>
        </AuthenticatedLayout>
    );
}
