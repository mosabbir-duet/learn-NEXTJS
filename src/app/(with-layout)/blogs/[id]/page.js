import loadBlogsData from "@/utilities/loadBlogsData";
import loadSingleData from "@/utilities/loadSingleData";

// dynamic tai generatemetadata use korte hbe 
export const generateMetadata = async ({params}) => {
    const {title} =await loadSingleData(params.id) || {}
    
    return {
        title: title
    }
}

// dynamic theke static build time a generate korte chaile kotota page hobe ta bole dite hbe 

export const generateStaticParams = async () => {
    const blogs = await loadBlogsData();

    return blogs.map(({id}) => ({
        id: id.toString(),
    }))
}

const SingleBlog = async ({params}) => {
    // console.log(params.segments)
    // const [year, id] = params.segments || []
     
    const {title, id, body} =await loadSingleData(params.id) || {}
    return (
        <div className="text-center">
            <h1 className="font-bold  border-b-slate-800 inline-block">{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default SingleBlog;