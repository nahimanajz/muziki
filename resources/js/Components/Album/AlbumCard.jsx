import { Link } from "@inertiajs/react";
import React from "react";
import Tracks from "./Track/Tracks";
import PrimaryButton from "../PrimaryButton";

const AlbumCard = ({ auth, album, saveAlbum }) => {
   

    return (
        <>
            {!album.name ? (
                <span className="w-full text-xl font-semibold text-gray-500 text-center ml-3 mt-3">
                    No album data yet
                </span>
            ) : (
                <div className="bg-white rounded-lg p-4 flex items-start justify-start w-full flex-wrap ">
                    <div className=" shadow-md p-12">
                        <h2 className="text-xl font-semibold">
                            Album: {album?.name}
                        </h2>
                        <p className="text-gray-600">Artist: {album?.artist}</p>
                        <p className="text-gray-600">
                            Released on: {album?.published}
                        </p>
                        <p className="text-gray-600">
                            Play(s): {album?.playCount}
                        </p>
                        <Link
                            href={album?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {album?.url}
                        </Link>
                        {auth?.user && 
                            <PrimaryButton onClick={saveAlbum}>
                                Add to Favorite
                            </PrimaryButton>
                        }
                      
                    </div>
                    <Tracks tracks={album.tracks} />
                </div>
            )}
        </>
    );
};

export default AlbumCard;
