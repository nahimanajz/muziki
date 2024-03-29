import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/auth/google";
    };
    return (
        <GuestLayout>
            <Head title="Log in" />
            <form onSubmit={submit} className="md:w-1/3 w-full shadow-lg p-[32px] my-[64px]">
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Are you new here?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Sign in
                    </PrimaryButton>
                </div>
                <div class="block mt-4">
                <div class="flex items-center justify-end mt-4">
                    <img
                        onClick={handleGoogleLogin}
                        src="/img/btn_google_signin_dark_normal_web.png"
                        alt="google icon"
                    />
                </div>
            </div>
            </form>
            
        </GuestLayout>
    );
}
