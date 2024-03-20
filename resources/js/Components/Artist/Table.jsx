import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import ActionIcons from "../ActionIcons";
import { router } from "@inertiajs/react";

import DeleteModal from "../DeleteModal";
import EditModal from "./EditModal";
import EmptyData from "../EmptyData";

const Table = ({ data }) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [artist, setArtist] = useState();
  

    const toggleDeleteModal = () => setDeleteModal(!deleteModal);
    const toggleEditModal = () => setEditModal(!editModal);

    const deleteArtist = () => {
        router.delete(`artist/${artist.id}`);
        toggleDeleteModal();
    };
   
          
    const thClx =
        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
    const tdClx = "px-6 py-4 whitespace-nowrap";

    return (
        <>
            {data.length === 0 ? (
               <EmptyData title={"No artist data yet"} />
            ) : (
                <div className="p-6 shadow ">
                    <table className="min-w-full divide-y divide-gray-200  ">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className={thClx}>Name</th>
                                <th className={thClx}>Listeners</th>
                                <th className={thClx}>Streamable</th>
                                <th className={thClx}>MBID</th>
                                <th className={thClx}>URL</th>
                                <th className={thClx}>Image</th>

                                <th className={thClx}>Action </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                data.map((record) => (
                                    <tr key={record.id}>
                                        <td className={tdClx}>{record.name}</td>
                                        <td className={tdClx}>
                                            {record.listeners}
                                        </td>
                                        <td className={tdClx}>
                                            {record.streamable ? "Yes" : "No"}
                                        </td>
                                        <td className={tdClx}>
                                            {!record.mbid
                                                ? "N/A"
                                                : record.mbid.substring(0, 5) +
                                                  "..."}
                                        </td>
                                        <td className={tdClx}>
                                            <Link
                                                href={record.url}
                                                className="text-blue-500 cursor-pointer"
                                            >
                                                {record.url}
                                            </Link>
                                        </td>
                                        <td className={tdClx}>
                                            <img
                                                src={record.image}
                                                alt="User"
                                                className="h-10 w-10 rounded-full"
                                            />
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap flex gap-[12px]">
                                            <ActionIcons
                                                onDelete={() => {
                                                    setArtist(record);
                                                    toggleDeleteModal();
                                                }}
                                                onEdit={() => {
                                                    setArtist(record);
                                                    setEditModal(!editModal);
                                                }}
                                                onShowDetail={undefined}
                                            />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}

            <DeleteModal
                deleteModal={deleteModal}
                toggleDeleteModal={toggleDeleteModal}
                handleDelete={deleteArtist}
            />
            <EditModal
                artist={artist}
                show={editModal}
                toggleShow={toggleEditModal}
                
            />
        </>
    );
};

export default Table;
