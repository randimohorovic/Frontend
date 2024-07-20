import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userData, setFormData] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(userData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/backend/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (data.success === false) {
      setError(data.message);
      return;
    }

    console.log(data);
  };
  console.log(userData);
  return (
    <div className="p-3 max-w-md mx-auto">
      <h1 className="text3xl text-center font-sans my-3">Kreiraj Račun</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="korisničko ime"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Lozinka "
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-cyan-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-65">
          Kreiraj račun
        </button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Imate li račun? </p>
        <Link to={"/sign-in"}>
          {" "}
          <span className="text-cyan-600">Prijavi se</span>
        </Link>
      </div>
    </div>
  );
}
