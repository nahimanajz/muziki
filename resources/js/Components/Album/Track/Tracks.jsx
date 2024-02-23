import { FaClock } from "react-icons/fa";

export default function Tracks({ tracks }) {
    return (
        <div className="ml-4 flex-shrink-0 ">
            <div className={`w-full ${tracks ? "shadow-lg" : " "} p-5`}>
                <table className="table-auto w-full">
                    <tbody>
                        {tracks &&
                            tracks.map((track,index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 hover:bg-gray-200"
                                >
                                    <td className="py-2 px-4">
                                        {track["@attr"]?.rank}
                                    </td>
                                    <td className="py-2 px-4">{track.name}</td>
                                    <td className="py-2 px-4">
                                        <a
                                            href={track.url}
                                            className="text-blue-500 hover:underline"
                                        >
                                            {track.url}
                                        </a>
                                    </td>
                                    <td className="py-2 px-4 flex space-x-[12px]">
                                        
                                        <FaClock color="primary" size={16} />
                                        <span className="text-sm mr-3">
                                            {track.duration}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
