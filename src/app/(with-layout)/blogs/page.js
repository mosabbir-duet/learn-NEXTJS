import loadBlogsData from "@/utilities/loadBlogsData";
import Link from "next/link";

// const blogs = [
//     {
//         id : 1,
//         year: 2015,
//         title: 'title 1'
//     },
//     {
//         id : 2,
//         year: 2025,
//         title: 'title 2'
//     },
//     {
//         id : 3,
//         year: 2035,
//         title: 'title 3'
//     },
//     {
//         id : 4,
//         year: 2045,
//         title: 'title 4'
//     }
// ]


const BlogsPage = async  () => {
    
    const blogs = await  loadBlogsData()
    return (
        <div className="container mx-auto">
            <h1 className="text-center my-4">All Blogs</h1>
            <div >
            {
                blogs.map(({id, body, title}) => 
                (<div key={id} className="block border border-orange-600 p-8 my-4">
                    <h2 className="text-2xl">{id}. {title}</h2>
                    <p className="my-2">{body}</p>
                    <Link  href={`/blogs/${id}`}><button className="bg-orange-600 rounded-md py-2 px-4 ">Details</button></Link>
                </div>)
                )
            }
            </div>
        </div>
    );
};

export default BlogsPage;