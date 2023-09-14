import Link from "next/link";

const blogs = [
    {
        id : 1,
        year: 2015,
        title: 'title 1'
    },
    {
        id : 2,
        year: 2025,
        title: 'title 2'
    },
    {
        id : 3,
        year: 2035,
        title: 'title 3'
    },
    {
        id : 4,
        year: 2045,
        title: 'title 4'
    }
]
const BlogsPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center my-4">All Blogs</h1>
            <div >
            {
                blogs.map(({id, year, title}) => <Link className="block border border-orange-600 p-8 my-4" href={`/blogs/${year}/${id}`} key={id}>{`Blogs Name: ${title}`}</Link>)
            }
            </div>
        </div>
    );
};

export default BlogsPage;