import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { users } from "../API/api.js";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      setIsAuthenticated(false);
      const res = await users.post("/logout");
      console.log(`whats th response ! `, res);
      toast.success("logout !");
    } catch (error) {
      console.log("erorr :", error.response);
    }
  };

  console.log(`isAuthenticated vbalue : `, isAuthenticated);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold text-blue-600">
            Blogify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/blog"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Blog
            </Link>

            <Link
              to="/creator"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Creator
            </Link>

            <Link
              to="/about"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated && profile.role === "admin" ? (
              <Link
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition"
              >
                Dashboard
              </Link>
            ) : (
              ""
            )}

            <Link
              // to="/login"
              className="bg-slate-900 hover:bg-black text-white px-4 py-2 rounded-xl font-semibold transition"
            >
              <button onClick={() => handleLogout()}>Logout</button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg hover:bg-slate-100"
              >
                Home
              </Link>

              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg hover:bg-slate-100"
              >
                Blog
              </Link>

              <Link
                to="/creator"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg hover:bg-slate-100"
              >
                Creator
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg hover:bg-slate-100"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg hover:bg-slate-100"
              >
                Contact
              </Link>

              {isAuthenticated && profile.role === "admin" ? (
                <Link
                  to="/dashboard"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition"
                >
                  Dashboard
                </Link>
              ) : (
                ""
              )}

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-slate-900 text-white p-3 rounded-xl text-center font-semibold"
              >
                <button onClick={() => handleLogout()}>Logout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
