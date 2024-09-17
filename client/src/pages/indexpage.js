import { useEffect, useState } from "react";
import Post from "../components/post";

export default function IndexPage() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        document.title = "Homepage";
        const response = fetch('http://localhost:4000/').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        })
    }, [])
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post key={post._id} {...post}/>
            ))}
        </>
    )
}