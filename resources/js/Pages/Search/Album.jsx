import AlbumCard from "@/Components/Album/AlbumCard";
import SearchForm from "@/Components/Album/SearchForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Album({ auth, album, message }) {
    const { data, setData, post, processing, progress, errors } = useForm();

    useEffect(() => {
        setData({
            artist: album?.artist,
            mbid: album?.mbid,
            playCount: album?.playcount,
            name: album?.name,
            url: album?.url,
            published: album?.wiki?.published,
            tracks: album?.tracks?.track,
            listeners: album?.listeners,
        });
    }, [album]);
    const handleAddToFavorite = () => {
        if (!data.published && !data.tracks) {
            toast.error("Release date and tracks must be provided");
        } else {
            post(route("album.store"));
        }
    };

    if (auth && auth.user) {
        return (
            <AuthenticatedLayout user={auth.user}>
                <SearchForm message={message}/>
                <AlbumCard
                    album={data}
                    auth={auth}
                    saveAlbum={handleAddToFavorite}
                />
            </AuthenticatedLayout>
        );
    }
    return (
        <GuestLayout searchSection={<SearchForm />}>
            <div className=" h-full w-full flex flex-wrap grow">
                <AlbumCard album={data}  />
            </div>
        </GuestLayout>
    );
}
