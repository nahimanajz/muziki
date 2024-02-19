import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8000/auth/google";
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen  bg-center   selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div class="flex items-center justify-end mt-4">
                            <img
                                onClick={handleGoogleLogin}
                                src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
                                alt="google icon"
                            />
                        </div>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8  font-extrabold text-6xl leading-[200px] text-slate-200">
                    Muziki
                </div>
            </div>
        </>
    );
}
