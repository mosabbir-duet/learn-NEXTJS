
const SingleBlog = ({params}) => {
    console.log(params.segments)
    const [year, id] = params.segments || []
    return (
        <div>
            SingleBlog {year || new Date().getFullYear()} for {id || "05"}
        </div>
    );
};

export default SingleBlog;