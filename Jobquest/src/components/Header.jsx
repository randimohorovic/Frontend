import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // da mozemo kroz rute ic

//header mi je fixan kroz cijelu apk pa mi treba kao komponenta
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Jobquest</span>
            <span className="text-slate-700">Jobquest</span>
          </h1>
        </Link>
        <ul className="flex gap-3">
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
        </ul>

        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-26 sm:w-66" //w-mobile size w: nakon te velicine radi ovu drugu
          />
          <FaSearch className="text-slate-400" />
        </form>
      </div>
    </header>
  );
}
