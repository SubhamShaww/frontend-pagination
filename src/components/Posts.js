import "./Posts.css";

function Posts({ posts, isLoaded }) {
    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="posts">
                {
                    posts.map((post) => {
                        return (
                            <div className="each__post" key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        )
                })
                }
            </div>
            
        )
    }
}

export default Posts;
