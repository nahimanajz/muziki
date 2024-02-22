import NavLink from "@/Components/NavLink";
import PrimaryButton from "../PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function Artist({ auth, artist }) {

    const image = artist.image[artist.image.length - 1]["#text"]
    const { post } = useForm({...artist, image});
   
  const addToFavorite = () => {
        post(route("artist.store"));
    };

    return (
        <div
            className={`max-w-xs mx-auto p-4 h-auto items-strecth border-[.5px] border-primary`}
        >
            <img src={image} />

            <div className="flex justify-between flex-wrap flex-col gap-y-1 w-full h-auto">
                <h2 className="font-semibold mt-2 text-slate-800 truncate w-20 truncate">
                    {artist.name}
                </h2>
                <h2 className="font-semibold mt-2 text-slate-800">
                    {artist.listeners}
                </h2>
                <NavLink
                    className="font-semibold mt-2 text-slate-600 hover:text-secondary hover:no-underline"
                    href={artist.url}
                >
                    {artist.url.substring(0, 15)}...
                </NavLink>
            </div>
            <p className="text-dark mt-2 font-bold">{artist.streamable}</p>
            {auth.user ?( <PrimaryButton onClick={addToFavorite}>
                Add to Favorite
            </PrimaryButton>):null}
           
        </div>
    );
}
