import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/tema/nightSlice";
import { useEffect, useState } from "react";
import { logOutSuccess } from "../redux/user/userslice.js";

export default function Baner() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const ruta = location.pathname;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const submitSearch = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const logOut = async () => {
    try {
      const res = await fetch("/backend/user/logout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(logOutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className="border-b-2 flex justify-between items-center px-4">
      <Link to="/" className=" ">
        <h1 className="font-bold text-sm sm:text-xl">
          <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
            Jobquest
          </span>
        </h1>
      </Link>

      <form onSubmit={submitSearch} className="flex items-center gap-2">
        <TextInput
          type="text"
          placeholder="Pretraži..."
          className="w-full sm:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          type="submit"
          color="gray"
          className="flex items-center px-4 py-2 h-10"
        >
          <AiOutlineSearch />
        </Button>
      </form>

      <div className="flex items-center gap-4">
        <Button
          className="w-12 h-10"
          color="gray"
          round="true"
          onClick={() => dispatch(toggleTheme())}
        >
          <FaMoon />
        </Button>
        <Link
          to="/"
          className={`${
            ruta === "/" ? "text-cyan-500" : "text-slate-700"
          } hover:text-blue-700 text-sm sm:text-base`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            ruta === "/about" ? "text-cyan-500" : "text-slate-700"
          } hover:text-blue-700 text-sm sm:text-base`}
        >
          O nama
        </Link>
        {currentUser ? (
          <>
            <Link to="/profile" className="text-sm sm:text-base">
              {currentUser.username}
            </Link>
            <Link to="/log-in">
              <button
                type="button"
                onClick={logOut}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Odjava
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/log-in">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Prijava
              </button>
            </Link>
          </>
        )}
      </div>
    </Navbar>
  );
}
