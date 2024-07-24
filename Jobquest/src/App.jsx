import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import About from "./views/About";
import Profile from "./views/Profile";
import Baner from "./components/Baner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Baner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="log-in" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
