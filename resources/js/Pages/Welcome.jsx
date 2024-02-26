import Search from "@/Components/Search";

import Artist from "@/Components/Artist/Artist";
import GuestLayout from "@/Layouts/GuestLayout";
import EmptyData from "@/Components/EmptyData";

export default function Welcome({ auth, laravelVersion, phpVersion, artists }) {
    return (
        <>
            {!auth.user && (
                <GuestLayout
                    searchSection={<Search />}
                    contents={
                        <>
                            {!artists ? (
                                <EmptyData
                                    title={"Artists data are not available yet"}
                                />
                            ) : (
                                <>
                                    {artists.map((artist, index) => (
                                        <Artist artist={artist} key={index} />
                                    ))}
                                </>
                            )}
                        </>
                    }
                />
            )}
        </>
    );
}
