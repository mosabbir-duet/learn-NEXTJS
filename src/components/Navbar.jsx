import Link from "next/link";

const navLinks = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/about",
        title: "About"
    },
    {
        path: "/contact",
        title: "Contact"
    },
    {
        path: "/blogs",
        title: "Blogs"
    },
  
    {
        path: "/dashboard",
        title: "Dashboard"
    },
]

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-gray-800 container py-2 mx-auto px-10 mb-1 " >
            <h1 className="text-4xl font-semibold text-orange-600">Learn Next</h1>
            <ul className="flex items-center justify-center">
                {
                    navLinks.map(({path, title}) => <li  className = "px-4 font-medium text-orange-400 hover:text-orange-600" key = {path}>
                        <Link href={path}>{title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navbar;