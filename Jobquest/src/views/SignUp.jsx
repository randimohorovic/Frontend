import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.username || !userData.email || !userData.password) {
      return setError("ispuni sva polja!");
    }

    try {
      setError(null);
      const res = await fetch("/backend/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("Response Data:", data);

      if (data.success === false) {
        return setError(data.message);
      }
      if (res.ok) {
        navigate("/log-in");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(error.message);
    }
  };

  return (
    <div className="main-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left side */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold">
            <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
              Jobquest
            </span>
          </Link>
          <p className="text-sm mt-5">Ovjde možete kreirati svoj račun!</p>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <div className="text-red-500">{error.message}</div>}
            <div>
              <Label value="Korisničko ime" />
              <TextInput
                type="text"
                placeholder="Korisničko ime"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Lozinka" />
              <TextInput
                type="password"
                placeholder="Lozinka"
                id="password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Kreiraj račun
            </button>
          </form>
          <div className="flex gap-1 mt-3 text-sm font-bold">
            <p>Imate li račun? </p>
            <Link to="/log-in">
              <span className="text-cyan-600">Prijavi se</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
