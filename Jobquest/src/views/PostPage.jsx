import React from "react";
import { Button } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewSection from "../components/ReviewSection";

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
  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`} //mogu filtrart da korisnik odmah ide na kategoriju objave u kojoj spada
        className="self-center mt-5"
      >
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {post && post.category}
        </button>
      </Link>
      {/* datum kad je objava kreirana , dodat satnicu u objekt, poslodavca,*/}
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          Satnica&nbsp;
          {post && post.pay}&nbsp;€
        </span>
      </div>
      {/* Details Section */}
      <div className="p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-sm">
        <div className="flex justify-between">
          <span className="font-semibold">Satnica</span>
          <span>{post && `${post.pay} €`}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-semibold">Datum kreiranja</span>
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-semibold">Poslodavac</span>
          <span>{post && post.llc}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-semibold">Opis</span>
        </div>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      {post?._id && <ReviewSection postId={post._id} />}
    </main>
  );
}
