import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom"; // da mozemo kroz rute ic

// header mi je fixan kroz cijelu apk pa mi treba kao komponenta
export default function Baner() {
  return (
    <Navbar className="border-b-2  items-center ">
      <Link to="/" className="flex ">
        <h1 className="font-bold text-sm sm:text-xl">
          <span className="text-slate-500">Jobquest</span>
        </h1>
      </Link>
      {/* <div className="flex item-center">
        <ul className="flex gap-7">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="profil">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Profil
            </li>
          </Link>
          <Link to="sign-in">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Prijava
            </li>
          </Link>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Odjava
          </li>
        </ul>i want to
      </div> */}
      <form className="flex items-center gap-2">
        <TextInput
          type="text"
          placeholder="Pretraži..."
          className="hidden lg:inline w-64"
        />
        <Button
          type="submit"
          color="blue"
          className="flex items-center px-4 py-2 w-12 h-10 lg:hidden pill"
        >
          <AiOutlineSearch className="text-blue-500" />
          Search
        </Button>
      </form>
      <div className="flex gap-2 md:order-4">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" round>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  hidden sm:inline font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Prijava
          </button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/">O nama</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/">Profil</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/">Odjava</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
