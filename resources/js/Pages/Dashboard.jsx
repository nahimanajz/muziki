import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


    export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className='w-full h-full flex flex-col flex justify-center items-center text-4xl font-bold leading-7'>
               Welcome {auth.user.name}
                
            </div>

            
        </AuthenticatedLayout>
    );
}
