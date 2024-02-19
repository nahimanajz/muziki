import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, get, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/auth/google";
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div class="block mt-4">
                <div class="flex items-center justify-end mt-4">
                    <img
                        onClick={handleGoogleLogin}
                        src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
                        alt="google icon"
                    />
                </div>
            </div>
        </GuestLayout>
    );
    
}
