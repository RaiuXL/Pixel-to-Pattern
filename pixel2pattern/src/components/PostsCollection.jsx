"use client";
import { useEffect, useState } from "react";
import PixelPost from "./PixelPost.jsx";
import Link from "next/link.js";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export default function PostsCollection() {

    const [ pixelPosts, setPixelPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                 const res = await fetch(`${apiUrl}/patterns`);
                if (!res.ok) throw new Error("failed to fetch posts");
                const posts = await res.json();
                setPixelPosts(posts);
            } catch (error) {
                console.error('failed to fetch posts ', error);
            } 
        }
        fetchPosts();

    }, []);

    return(
        <>
        {pixelPosts.map((post, index) => (
            <Link href={`/view/${post.pattern_ID}`} key={index} ><PixelPost post={post} /></Link>
        ))}
        
        </>
    )
}