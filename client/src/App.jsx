import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Creator from "./Home/Creator";
import UpateBlog from "./Dashboard/UpateBlog";
import Detail from "./pages/Detail";
import GetCreator from "./Home/GetCreator";

function App() {
  const { profile, isAuthenticated } = useAuth();
  const location = useLocation();
  const hideNavBarFooter = ["/dashboard", "/login", "register"].includes(
    location.pathname,
  );

  console.log(`value after login :--> :`, profile);

  return (
    <div>
      {!hideNavBarFooter && <Navbar />}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />

        <Route path="/blog" element={isAuthenticated ? <Blogs /> : <Login />} />

        
        {/* redirecting to page  impo */}
        <Route path="/blog/:id" element={<Detail/>} />
        <Route path="/getcreator/:id" element={<GetCreator/>} />
        

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />

        <Route path="/creator" element={<Creator />} />

        {/* update elog  */}
        <Route path="/updateBlog" element={<UpateBlog />} />
      </Routes>

      {!hideNavBarFooter && <Footer />}

      <Toaster />
    </div>
  );
}

export default App;
