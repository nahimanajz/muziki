import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import InputError from "../InputError";
import { toast } from "react-toastify";

export default function EditModal({ album, show, toggleShow }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({});
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("album.update", album.id))
        if(!errors){

            toggleShow()
            toast(`${data.name} is updated successfully`)
        }
    };
    useEffect(() => {
        setData(album);
    },[album]);
    
    return (
        <Modal
            show={show}
            closeable={true}
            onClose={toggleShow}
            position={"items-start"}
            padding={false}
        >
            <div className="bg-white rounded-lg overflow-hidden z-20">
                <div className="p-4">
                    <div className="font-semibold text-xl pb-5 border-b border-b-slate-400 mb-9">
                        Edit Album
                    </div>
                    <div>
                        <form
                          
                            className="max-w-lg mx-auto space-y-[24px]"
                        >
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    defaultValue={data?.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={handleChange}
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="artist" value="Artist" />

                                <TextInput
                                    id="artist"
                                    name="artist"
                                    defaultValue={data?.artist}
                                    className="mt-1 block w-full"
                                    autoComplete="artist"
                                    isFocused={true}
                                    onChange={handleChange}
                                    required
                                />

                                <InputError
                                    message={errors.artist}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="url" value="url" />

                                <TextInput
                                    id="url"
                                    name="url"
                                    defaultValue={data?.url}
                                    className="mt-1 block w-full"
                                    autoComplete="url"
                                    isFocused={true}
                                    onChange={handleChange}
                                    required
                                />

                                <InputError
                                    message={errors.url}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="playcount" value="Play Count" />

                                <TextInput
                                    id="playCount"
                                    name="playCount"
                                    defaultValue={data?.playCount}
                                    className="mt-1 block w-full"
                                    autoComplete="playCount"
                                    isFocused={true}
                                    onChange={handleChange}
                                    required
                                />

                                <InputError
                                    message={errors.playCount}
                                    className="mt-2"
                                />
                            </div>
                            
                            
                        </form>
                    </div>
                    <div className="flex justify-end space-x-[32px] mt-[24px]">
                        <button
                            onClick={toggleShow}
                            className="text-gray-600 mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
