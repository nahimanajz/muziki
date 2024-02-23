import Search from "@/Components/Search";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ArtistItem from "@/Components/Artist/Artist";
import { useState } from "react";
import Table from "@/Components/Artist/Table";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Artist({ auth, artists, favoriteArtists }) {
    const [showFavorite, setShowFavorite] = useState(true);
    const toggleShowFavorite= () => setShowFavorite(!showFavorite)

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
            onClick={toggleShowFavorite}>
              
                {showFavorite ? "Add Favorie" : "Show Favorites"}
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
                <div className="p-auto">
                    <Table data={favoriteArtists} />
                </div>
            )}
        </AuthenticatedLayout>
    );
}
