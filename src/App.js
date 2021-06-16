import { useEffect, useState } from "react";
import "./App.css";
import PaginationButtons from "./components/PaginationButtons";
import Posts from "./components/Posts";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10

    useEffect(() => {
        let isMounted = true;
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchPosts = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    signal: signal,
                }
            );
            const resData = await res.json();
            // console.log(resData);
            isMounted && setPosts(resData)
            isMounted && setIsLoaded(true) 
        };

        fetchPosts();

        return () => {
            // cleanup;
            isMounted = false;
            abortController.abort();
        };
    }, []);

    // get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const changePage = (pageNo) => {
        setCurrentPage(pageNo)
    }

    return (
        <div className="app">
            <header className="app__header">POSTS</header>
            <div className="app__body">
                <Posts posts={currentPosts} isLoaded={isLoaded} />
                <PaginationButtons noOfPosts={posts.length/postsPerPage} changePage={changePage} />
            </div>
        </div>
    );
}

export default App;
