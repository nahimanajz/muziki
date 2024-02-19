import Search from "@/Components/Search";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Artist from "@/Components/Artist";
export default function Welcome({ auth, laravelVersion, phpVersion, artists }) {
 
    const[apiData, setApiData] =useState()
    useEffect(()=>{
        if(artists && artists.length){
            setApiData(artists)
        }
    })

    return (
        <>
            <Head title="Welcome" />
            <div className="w-full h-screen">
                <div className="h-11">
                    {/* TODO:  put this into guest layout */}
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className="flex flex-wrap gap-[32px] sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                            <Link
                                href={route("register")}
                                className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
                <div className="h-auto bg-slate-300">
                    <Search apiData={setApiData}/>
                </div>
                <div className="min-h-2/5 h-full bg-white flex flex-wrap">
                     //TODO: map artiststyles to
                     {apiData && apiData.map((artist, index) => <Artist artist={artist} key={index}/> )}
                          
                

                </div>
            </div>
        </>
    );
}
