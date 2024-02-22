import Search from "@/Components/Search";

import Artist from "@/Components/Artist/Artist";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome({ auth, laravelVersion, phpVersion, artists }) {
    return (
        <>
            {!auth.user ? (
                <GuestLayout
                    searchSection={<Search />}
                    contents={
                        artists &&
                        artists.map((artist, index) => (
                            <Artist artist={artist} key={index} />
                        ))
                    }
                />
            ) : (
                <div className="w-full h-screen bg-blue-200">
                    Signed in user
                </div>
            )}
        </>
    );
}
