import Modal from "./Modal";

export default function DeleteModal({deleteModal, toggleDeleteModal, handleDelete}){
    
return(
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
)
}