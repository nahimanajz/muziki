import NavLink from "@/Components/NavLink";
export default function Artist({artist}) {
  
    return (
        <div className={`max-w-xs mx-auto p-4 h-auto items-strecth`}>
            {/* <ImageSlider images={images[0]} /> */}
            <NavLink className="cursor-pointer">
                <div className="flex justify-between flex-wrap">
                    <h2 className="font-semibold mt-2 text-slate-800 truncate w-20 truncate">
                        {JSON.stringify(artist.name)}
                    </h2>
                    <h2 className="font-semibold mt-2 text-slate-800">
                        {artist.listeners}
                    </h2>
                </div>
                <h2 className="font-semibold mt-2 text-slate-600">{"name"}</h2>

                <p className="text-gray-600 w-full truncate">{"listeners"}</p>

                <p className="text-dark mt-2 font-bold">{"url"}</p>
                <p className="text-dark mt-2 font-bold">{"streamable"}</p>
            </NavLink>
        </div>
    );
}
