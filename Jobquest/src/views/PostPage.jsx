import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostPage() {
  const { posturlTitle } = useParams();
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  console.log(post);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `/backend/post/getposts?urlTitle=${posturlTitle}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setError(false);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchPost();
  }, [posturlTitle]);
  return <div>Post page</div>;
}
