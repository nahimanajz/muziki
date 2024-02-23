import AlbumCard from "@/Components/Album/AlbumCard";
import SearchForm from "@/Components/Album/SearchForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Album({ auth, album }) {
    const { data, setData } = useForm();

    useEffect(() => {
        setData({
            artist: album?.artist,
            mbid: album?.mbid,
            playCount: album?.playCount,
            name: album?.name,
            url: album?.url,
            published: album?.wiki?.published,
            tracks: album?.tracks?.track,
        });
    }, [album]);
    const handleAddToFavorite = () => {
        post(route("album"))
    };

    if (auth && auth.user) {
        return (
            <AuthenticatedLayout>
                <SearchForm />
                <AlbumCard album={data}  auth={auth} saveAlbum={handleAddToFavorite}/>
            </AuthenticatedLayout>
        );
    }
    return (
        <GuestLayout searchSection={<SearchForm />}>
            <div className=" h-full w-full flex flex-wrap grow">
                <AlbumCard album={data} />
            </div>
        </GuestLayout>
    );
}
