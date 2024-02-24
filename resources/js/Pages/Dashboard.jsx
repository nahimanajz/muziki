import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


    export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className='w-full h-full flex flex-col'>
                <div className='flex justify between'>
                <h2 className='text-xl font-semibold text-gray-800'> Favorite albums</h2>
                    <Link className='' href={route("find/album")}> Add Album</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            
                        </tr>
                    </thead>
                </table>
            </div>

            
        </AuthenticatedLayout>
    );
}
