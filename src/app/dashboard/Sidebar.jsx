import Link from "next/link";

const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product'
    },
    {
        path: '/',
        title: 'Home'
    },
]
const Sidebar = () => {
    return (
        <aside className='bg-gray-800 px-8 min-h-screen'>
            <h1 className='font-semibold text-orange-600 my-4 text-center text-3xl '>Dashboard</h1>
            <ul className="my-4">
                {
                    navLinks.map(({path, title}) => 
                    <li className="mb-2 font-medium text-orange-400 hover:text-orange-600" key={path}>
                        <Link href={path}>{title}</Link>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;