

const BlogList = (props) => {
    const blogs = props.blogs;
    return ( <div className="blog-list">
        {blogs.map((blog) => (
            <div className="collapse collapse-arrow border border-base-300 bg-base-200 m-5 p-5 rounded-lg shadow-lg w-full max-w-2xl" key={blog.id}>
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium flex justify-between peer-checked:bg-base-300">
                    <span>{blog.title}</span>
                    <span className="text-sm text-gray-500">written by: {blog.author}</span>
                </div>
                <div className="collapse-content peer-checked:max-h-0">
                    <p className="text-base text-gray-700">{blog.body}</p>
                </div>
            </div>
        ))}
    </div> );
}
 
export default BlogList;