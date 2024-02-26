import { useState } from "react";
import ActionIcons from "../ActionIcons";
import DeleteModal from "../DeleteModal";
import { Link, router } from "@inertiajs/react";
import EditModal from "./EditModel";
import moment from "moment";
import { FaInfo, FaMusic } from "react-icons/fa";

export default function Table({ data }) {
    const [deleteModal, setDeleteModal] = useState(false);

    const [editModal, setEditModal] = useState(false);
    const [album, setAlbum] = useState();

    const toggleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    };
    const toggleEditModal = () => {
        setEditModal(!editModal);
    };
    const deleteAlbum = () => {
        router.delete(`album/${album.id}`);
        toggleDeleteModal();
    };

    const thClx =
        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
    const tdClx = "px-6 py-4 whitespace-nowrap";
    return (
        <>
            <table className=" w-full divide-y divide-gray-200 shadow">
                <thead className="bg-gray-50">
                    <tr>
                        <th className={thClx}>Name</th>
                        <th className={thClx}>Artist</th>
                        <th className={thClx}>url</th>
                        <th className={thClx}>Play count</th>
                        <th className={thClx}>Release date</th>

                        <th className={thClx}>Action </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data &&
                        data.map((record, index) => (
                            <tr key={index}>
                                <td className={tdClx}>{record.name}</td>
                                <td className={tdClx}>{record.artist}</td>
                                <td className={tdClx}>{record.url}</td>
                                <td className={tdClx}>{record.playCount}</td>
                                <td className={tdClx}>
                                    {moment(record.published).format(
                                        "MMMM Do YYYY, h:mm:ss a"
                                    )}
                                </td>
                                <ActionIcons
                                    onDelete={() => {
                                        setAlbum(record);
                                        toggleDeleteModal();
                                    }}
                                    onEdit={() => {
                                        setAlbum(record);
                                        toggleEditModal();
                                    }}
                                    detail={
                                        <Link href={`/album/${record.id}`}>
                                            <FaMusic
                                                size={15}
                                                color="slate-400"
                                            />
                                        </Link>
                                    }
                                />
                            </tr>
                        ))}
                </tbody>
            </table>
            <DeleteModal
                deleteModal={deleteModal}
                toggleDeleteModal={toggleDeleteModal}
                handleDelete={deleteAlbum}
            />
            <EditModal
                album={album}
                show={editModal}
                toggleShow={toggleEditModal}
            />
        </>
    );
}
