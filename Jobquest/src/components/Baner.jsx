import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // da mozemo kroz rute ic

// header mi je fixan kroz cijelu apk pa mi treba kao komponenta
export default function Baner() {
  const location = useLocation();
  const ruta = location.pathname;
  return (
    <Navbar className="border-b-2  flex ">
      <Link to="/" className=" ">
        <h1 className="font-bold text-sm sm:text-xl">
          <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
            Jobquest
          </span>
        </h1>
      </Link>

      <form className="flex items-center gap-2">
        <TextInput
          type="text"
          placeholder="Pretraži..."
          className="hidden lg:inline w-64"
        />
        <Button
          type="submit"
          color="gray"
          className="flex items-center px-4 py-2 w-12 h-10 lg:hidden pill"
        >
          <AiOutlineSearch />
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          round="true"
        >
          <FaMoon />
        </Button>
        <Link to="/log-in">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  hidden sm:inline font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Prijava
          </button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          active={ruta === "/"}
          as={"div"}
          className={`${
            ruta === "/" ? "text-cyan-500" : "text-slate-700"
          } hover:text-blue-700`}
        >
          <Link to="/">Home </Link>
        </Navbar.Link>
        <Navbar.Link
          active={ruta === "/about"}
          as={"div"}
          className={`${
            ruta === "/about" ? "text-cyan-500" : "text-slate-700"
          } hover:text-blue-700`}
        >
          <Link to="/about"> O nama</Link>
        </Navbar.Link>
        <Navbar.Link
          active={ruta === "/profil"}
          as={"div"}
          className={`${
            ruta === "/profil" ? "text-cyan-500" : "text-slate-700"
          } hover:text-blue-700`}
        >
          <Link to="/profil">Profil </Link>
        </Navbar.Link>
        <Navbar.Link
          active={ruta === "/logout"}
          as={"div"}
          className={`${
            ruta === "/logout" ? "text-cyan-500" : "text-slate-700"
          } hover:text-white-700`}
        >
          <Link to="/logout">Odjava</Link>
        </Navbar.Link>
        <Navbar.Link
          active={ruta === "/logout"}
          as={"div"}
          className={`${
            ruta === "/sign-up" ? "text-cyan-500" : "text-slate-700"
          } hover:text-white-700`}
        >
          <Link to="/sign-up">Kreiraj račun</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
