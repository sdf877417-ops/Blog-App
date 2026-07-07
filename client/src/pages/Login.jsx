import React, { useState } from "react";
import { users } from "../API/api.js";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";

function Login() {
  const navigate = useNavigate();

  const { blogs, profile, setProfile, isAuthenticated, setIsAuthenticated } =
    useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = async (e) => {
    e.preventDefault();
    alert("login")

    try {
      const res = await users.post("/login", {
        email,
        password,
        role,
      });

      console.log("res.data :-- ", res.data);
      setProfile(res.data.user);
      setIsAuthenticated(true);
      // alert(res.data.message || "Login Successful");
      toast.success(`Welcome ${res?.data?.user?.name || "user"} !`);

      // fetch myProfile()  calling etchProfile API here for direct data in profile
      // const profile = await users.get("/getMyProfile");
      // console.log(`profile.data at login.jsx :`, profile.data);
      // setProfile(profile.data);

      setEmail("");
      setPassword("");
      setRole("");

      // navigate("/dashboard");
      navigate("/");  
    } catch (error) {
      console.log("erorr :", error);
      console.log("erorr.response :", error.response);
      console.log(error.response?.data);

      // alert(error.response?.data?.message || "Something went wrong");
      toast.error(
        error.response?.data?.message || "error is there check console",
      );
      setEmail("");
      setPassword("");
      setRole("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <p className="">
            New user  ?{" "}
            <span className=" font-bold  text-xl">
              <Link
                to={"/signup"}
                className=" font-bold  text-xl hover:text-orange-950"
              >
                {" "}
                signup
              </Link>
            </span>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
