// import React, { useState } from "react";
// import { users } from "../API/api.js";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider.jsx";
// import axios from "axios";

// function Login() {
//   const navigate = useNavigate();

//   const { blogs, profile, setProfile, isAuthenticated, setIsAuthenticated } =
//     useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "https://blog-app-backend-x81h.onrender.com/api/user/login",
//         {
//           email,
//           password,
//           role,
//         },
//       );
//       alert("login req qaati ");
//       console.log("res.data :-- ", res?.data);
//       setProfile(res.data.user);
//       setIsAuthenticated(true);
//       // alert(res.data.message || "Login Successful");
//       toast.success(`Welcome ${res?.data?.user?.name || "user"} !`);

//       // fetch myProfile()  calling etchProfile API here for direct data in profile
//       // const profile = await users.get("/getMyProfile");
//       // console.log(`profile.data at login.jsx :`, profile.data);
//       // setProfile(profile.data);

//       setEmail("");
//       setPassword("");
//       setRole("");

//       navigate("/");
//     } catch (error) {

//       // alert(error.response?.data?.message || "Something went wrong");
//       alert(error.response);
//       console.log("LOGIN WALA erorr :", error);
//       console.log("LOGIN WALA erorr.response :", error.response);
//       console.log(error.response?.data);
//       setEmail("");
//       setPassword("");
//       setRole("");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
//           Login
//         </h1>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//           <p className="">
//             New user ?{" "}
//             <span className=" font-bold  text-xl">
//               <Link
//                 to={"/signup"}
//                 className=" font-bold  text-xl hover:text-orange-950"
//               >
//                 {" "}
//                 signup
//               </Link>
//             </span>
//           </p>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { users } from "../API/api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate();

  const { setProfile, setIsAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }

    if (!formData.password.trim()) {
      return toast.error("Password is required");
    }

    try {
      setLoading(true);
      alert("res ka niche tak aay mian");
      const { data } = await users.post(
        "/login",
        {
          email: formData.email,
          password: formData.password,
          role: formData.role,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Login Success :", data);

      setProfile(data.user);
      setIsAuthenticated(true);

      toast.success(data.message || "Login Successful");

      navigate("/");
    } catch (error) {
      console.error("Login Error :", error);

      if (error.response) {
        console.log("Status :", error.response.status);
        console.log("Response :", error.response.data);

        toast.error(error.response.data?.message || "Login failed");
      } else if (error.request) {
        console.log("No Response :", error.request);

        toast.error("Server not responding. Check backend or CORS.");
      } else {
        console.log("Error :", error.message);

        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-lg p-3"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center">
            New User?{" "}
            <Link to="/signup" className="font-bold text-blue-600">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
