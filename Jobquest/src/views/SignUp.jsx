import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-md mx-auto">
      <h1 className="text3xl text-center font-sans my-3">Kreiraj Račun</h1>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="korisničko ime"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="password"
          placeholder="Lozinka "
          className="border p-3 rounded-lg"
          id="username"
        />
        <button className="bg-cyan-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-65">
          Kreiraj račun
        </button>
      </form>
    </div>
  );
}
