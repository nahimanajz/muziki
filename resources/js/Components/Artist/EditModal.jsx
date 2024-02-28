import { useEffect, useState } from "react";
import Modal from "../Modal";
import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import InputError from "../InputError";
import { toast } from "react-toastify";

export default function EditModal({ artist, show, toggleShow }) {
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
        patch(route("artist.update", artist.id))
        toggleShow()
        toast(`${data.name} is updated successfully`)

    };
    useEffect(() => {
        setData(artist);
    },[artist]);
    
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
                        Edit Artist
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
                                <InputLabel
                                    htmlFor="listeners"
                                    value="Listeners"
                                />

                                <TextInput
                                    id="listeners"
                                    name="listeners"
                                    defaultValue={data?.listeners}
                                    className="mt-1 block w-full"
                                    autoComplete="listeners"
                                    isFocused={true}
                                    onChange={handleChange}
                                    required
                                />

                                <InputError
                                    message={errors.listeners}
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
                            <div className="mb-4">
                                <label
                                    htmlFor="streamable"
                                    className="block text-gray-700"
                                >
                                    Streamable
                                </label>
                                <select
                                    name="streamable"
                                    id="streamable"
                                    defaultValue={data?.streamable ?? "1"} 
                                    onChange={(e) =>
                                        setData("streamable", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                >
                                    <option value={"1"}>Yes</option>
                                    <option value={"0"}>No</option>
                                </select>
                                <InputError
                                    message={errors.streamable}
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
