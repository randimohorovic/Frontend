import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="main-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left side */}
        <div className="flex-1">
          <Link to="/" className="text-3xl font-bold ">
            <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
              Dobrodošao na svoj profil
            </span>
          </Link>
          <p className="text-sm mt-5">Ovjde možete ažurirati svoje podatke</p>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Korisničko ime" />
              <TextInput
                type="text"
                placeholder="Korisničko ime"
                id="username"
                defaultValue={currentUser.username}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                defaultValue={currentUser.email}
              />
            </div>
            <div>
              <Label value="Lozinka" />
              <TextInput type="password" placeholder="Lozinka" id="password" />
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Ažuriraj podatke
            </button>
          </form>
          <div className="text-red-600 flex gap-1 mt-3 text-sm font-bold">
            <span className="cursor-pointer">Obriši račun</span>
            <span className="cursor-pointer">Odjavi se</span>
          </div>
        </div>
      </div>
    </div>
  );
}
