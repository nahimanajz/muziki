import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { toast } from "react-toastify";

export default function Search() {
    const { data, setData, post, errors } = useForm({});
    const [enabled, setEnabled] = useState(false);

    const handleSearch = (e) => {
        try {
            e.preventDefault();
            if (!enabled) {
                post(route("search.artist"));
            } else {
                post(route("search.album"));
            }
            
        } catch (error) {
            toast.error(error.message)
        }
       
    };
    const handleChange = (e) => {
        if (!enabled) {
            setData({artist: e.target.value});
        } else {
            setData({album: e.target.value});
        }
    };
    

    return (
        <>
            <Head title="Search" />

            <div className="p-[32px] w-auto h-auto  gap-[48px]">
                <form
                    onSubmit={handleSearch}
                    className="flex items-center gap-[32px] grow"
                >
                    <div className="self-center space-y-[12px]">
                        <InputLabel
                            htmlFor="Type"
                            value="Type.."
                            className="text-[18px] text-secondary"
                        />
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${
                                enabled ? "bg-secondary" : "bg-gray-400"
                            }
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span
                                className={`${
                                    enabled ? "translate-x-6" : "translate-x-1"
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                    </div>
                    <div className="w-1/2">
                        <InputLabel
                            htmlFor="Search"
                            value={`Search for ${
                                enabled ? "Album" : " Artist"
                            }`}
                            className="tracking-md text-[18px] w-full "
                        />

                        <TextInput
                            id="search"
                            className="mt-1 block w-full "
                            placeholder={`Your favorite ${
                                enabled ? "Album" : "Artist"
                            } `}
                            value={data.name}
                            onChange={handleChange}
                            required
                            isFocused
                            autoComplete="search"
                        />
                   
                        <InputError className="mt-2" message={errors.name} />
                    </div>
                    <div className="self-center pt-7">
                        <PrimaryButton
                            className="ms-4  text-white  rounded-2xl text-base"
                            type="submit"
                        >
                            Search
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
