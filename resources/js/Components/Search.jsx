import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { toast } from "react-toastify";

export default function Search() {
    const { data, setData, post, errors } = useForm({});

    const handleSearch = (e) => {
        try {
            e.preventDefault();

            post(route("search.artist"));
        } catch (error) {
            toast.error(error.message);
        }
    };
    const handleChange = (e) => {
        setData({ artist: e.target.value });
    };

    return (
        <>
            <Head title="Search" />

            <div className="p-[32px] w-auto h-auto  gap-[48px]  bg-slate-50">
                <form
                    onSubmit={handleSearch}
                    className="flex items-center gap-[32px] grow"
                >
                    
                    <div className="w-1/2">
                        <InputLabel
                            htmlFor="Search"
                            value={`Search for   Artist
                                `}
                            className="tracking-md text-[18px] w-full "
                        />

                        <TextInput
                            id="search"
                            className="mt-1 block w-full "
                            placeholder={`Your favorite Artist
                                 `}
                            value={data.name}
                            onChange={handleChange}
                            isFocused
                            autoComplete="search"
                        />

                        <InputError className="mt-2" message={errors.artist} />
                    </div>
                    <div className="self-center pt-7">
                        <PrimaryButton
                        id="search-button"
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
