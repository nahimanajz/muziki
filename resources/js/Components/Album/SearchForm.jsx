import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "../PrimaryButton";
import { toast } from "react-toastify";

export default function SearchForm({ message }) {
    const { data, setData, post, processing, errors, reset } = useForm({});
    const doFindAlbum = () => {
        post(route("search.album"));
        if(message){
            toast.error(message);
        }
       
    };
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <div className="flex flex-col md:flex-row w-full p-6 bg-slate-50 text-base font-normal">
            <div className="p-4">
                <InputLabel value={"Artist"} />
                <TextInput name="artist" id="artist" onChange={handleChange}  placeholder={"Enter artist name"}/>
                <InputError message={errors?.artist} />
            </div>
            <div className="p-4">
                <InputLabel value={"Artist"} />
                <TextInput name="album" id="album" onChange={handleChange} placeholder={"Enter album owned by written artist"}/>
                <InputError message={errors?.album} />
            </div>
            <div className="p-4">
                <PrimaryButton
                    type="button"
                    onClick={doFindAlbum}
                    className="mt-6"
                >
                    {" "}
                    Search{" "}
                </PrimaryButton>
            </div>
        </div>
    );
}
