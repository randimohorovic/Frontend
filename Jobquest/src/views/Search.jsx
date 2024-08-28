import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "empty",
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        searchTerm: searchTermFromUrl || "",
        sort: sortFromUrl || "desc",
        category: categoryFromUrl || "empty",
      });
    }

    const fetchPosts = async () => {
      const searchQuery = urlParams.toString();
      try {
        const res = await fetch(`/backend/post/getposts?${searchQuery}`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts);
          setShowMore(data.posts.length === 9);
        } else {
          console.error("Greška kod dohvacanja objave", await res.text());
        }
      } catch (error) {
        console.error("Greska dohvacanja objave", error);
      }
    };

    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData((prev) => ({ ...prev, [id]: value }));
  };

  const searchPost = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(sidebarData);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();

    try {
      const res = await fetch(`/backend/post/getposts?${searchQuery}`);
      if (res.ok) {
        const data = await res.json();
        setPosts((prev) => [...prev, ...data.posts]);
        setShowMore(data.posts.length === 9);
      } else {
        console.error("Greska dohvacanja objave", await res.text());
      }
    } catch (error) {
      console.error("Greska dohvacanja objave", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={searchPost}>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">Pretraži:</label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Po daumu:</label>
            <Select onChange={handleChange} value={sidebarData.sort} id="sort">
              <option value="desc">Novije</option>
              <option value="asc">Starije</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Kategorija:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
            >
              <option value="empty">Odaberi kategoriju</option>
              <option value="IT">IT</option>
              <option value="Pomoćni poslovi">Pomoćni poslovi</option>
              <option value="Administrativni poslovi">
                Administrativni poslovi
              </option>
            </Select>
          </div>
          <button type="submit" outline gradientDuoTone="purpleToPink">
            Pretraži
          </button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          Rezultati objave:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {posts.length === 0 ? (
            <p className="text-xl text-gray-500">Nema objava...</p>
          ) : (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          )}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
