import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  // const [userData, setFormData] = useState({});
  // const [error, setError] = useState({});
  // const navigate = useNavigate();
  // const onchange = (e) => {
  //   setFormData({
  //     ...userData,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // console.log(userData);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("/backend/auth/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(userData),
  //   });
  //   const data = await res.json();
  //   if (data.success === false) {
  //     setError(data.message);
  //     return;
  //   }

  //   console.log(data);
  // };
  // console.log(userData);
  return (
    <div className="main-h-screen mt-20">
      <div
        className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center
      gap-5"
      >
        {/* ljeva strana */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold">
            <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
              Jobquest
            </span>
          </Link>
          <p className="text-sm mt-5">Ovjde možete kreirati svoj račun!</p>
        </div>

        {/* desna strana*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Korisničko ime" />
              <TextInput
                type="text"
                placeholder="Korisničko ime"
                id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="text" placeholder="@" id="email" />
            </div>
            <div>
              <Label value="Lozinka" />
              <TextInput type="text" placeholder="Lozinka" id="password" />
            </div>
            <button
              type="submit"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  hidden sm:inline font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Kreiraj račun
            </button>
          </form>
          <div className="flex gap-1 mt-3 text-sm font-bold">
            <p>Imate li račun? </p>
            <Link to={"/sign-in"}>
              {" "}
              <span className="text-cyan-600">Prijavi se</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
