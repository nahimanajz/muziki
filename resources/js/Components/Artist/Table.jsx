import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import ActionIcons from "../ActionIcons";
import Modal from "../Modal";
import { router, usePage } from '@inertiajs/react'
import { toast } from 'react-toastify';

const Table = ({ data }) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [artist, setArtist] = useState();
    const{errors, patch} = useForm({})
    const {sharedData}= usePage();
 
    const toggleDeleteModal = () => setDeleteModal(!deleteModal);

    const handleDelete = () => {
      router.delete(`artist/${artist.id}`);
      toast.success(sharedData?.message)
    };
    const handleEdit = () => {
      patch(route("artist.edit",route.id))
    }

    return (
        <>
            <div className="p-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Listeners
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Streamable
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                MBID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                URL
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action{" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data &&
                            data.map((record) => (
                                <tr key={record.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {record.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {record.listeners}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {record.streamable ? "Yes" : "No"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {!record.mbid
                                            ? "N/A"
                                            : record.mbid.substring(0, 5) +
                                              "..."}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link
                                            href={record.url}
                                            className="text-blue-500 cursor-pointer"
                                        >
                                            {record.url}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
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
                                            onEdit={() =>
                                                setEditModal(!editModal)
                                            }
                                            onShowDetail={undefined}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <Modal
                show={deleteModal}
                closeable={true}
                onClose={toggleDeleteModal}
                position={"items-start"}
            >
                <div className="bg-white rounded-lg overflow-hidden z-20">
                    <div className="p-4">
                        <h1 className="text-lg font-semibold mb-2">
                            Are you sure you want to delete?
                        </h1>
                        <div className="flex justify-end">
                            <button
                                onClick={toggleDeleteModal}
                                className="text-gray-600 mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Table;
