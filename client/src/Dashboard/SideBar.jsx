// import React from "react";
// import { useAuth } from "../context/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { users } from "../API/api.js";

// const SideBar = ({ setComponent }) => {
//   const navigate = useNavigate();
//   const { blogs, profile, setProfile, isAuthenticated, setIsAuthenticated } =
//     useAuth();

//   console.log("value in  sidebar :-", profile, isAuthenticated);

//   function handleComponent(value) {
//     setComponent(value);
//   }

//   const gotoHome = () => {
//     navigate("/");
//   };

//   // logout
//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await users.post("/logout");
//       console.log(res.data);
//       setIsAuthenticated(false);
//       setProfile(null);
//       navigate("/login");
//     } catch (error) {
//       console.log("erorr AT LOGOUT :---", error.response);
//       alert("error");
//     }
//   };
//   return (
//     <>
//       <div className="max-w-[300px] h-[700px]">
//         <div className="text-2xl bg-gray-300 flex flex-col items-center  gap-4">
//           <h1>{profile?.name || "reload once "}</h1>

//           <div className="text-center">
//             <img
//               src={profile?.photo}
//               alt="not getting photo ::  API ::"
//               className="h-35 w-39 text-center  rounded-full "
//             />
//           </div>

//           <ul className="flex flex-col justify-evenly gap-5">
//             <button
//               onClick={() => handleComponent("My Blog")}
//               className="w-55 bg-green-300  hover:bg-green-700  rounded-lg px-5 py-3 "
//             >
//               MY BLOGS
//             </button>

//             <button
//               onClick={() => handleComponent("Create Blog")}
//               className="w-55  bg-blue-500  hover:bg-green-300  rounded-lg px-5 py-3 "
//             >
//               CREATE BLOG
//             </button>

//             <button
//               onClick={() => handleComponent("My Profile")}
//               className="w-55 bg-purple-500  hover:bg-purple-300  rounded-lg px-5 py-3 "
//             >
//               MY PROFILE
//             </button>

//             <button
//               onClick={gotoHome}
//               className="w-55 bg-red-700  hover:bg-red-300  rounded-lg px-5 py-3 "
//             >
//               HOME
//             </button>

//             <button
//               onClick={handleLogout}
//               className="w-55 bg-yellow-700  hover:bg-yellow-300  rounded-lg px-5 py-3 "
//             >
//               LOGOUT
//             </button>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;


// chat gpt code 

import React from "react";
import {
  User,
  FileText,
  SquarePen,
  House,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { users } from "../API/api.js";

const SideBar = ({ component, setComponent, closeSidebar }) => {
  const navigate = useNavigate();

  const { profile, setProfile, setIsAuthenticated } = useAuth();

  const handleComponent = (value) => {
    setComponent(value);

    // Close sidebar automatically on mobile
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  const gotoHome = () => {
    navigate("/");

    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await users.post("/logout");

      setIsAuthenticated(false);
      setProfile(null);

      navigate("/login");
    } catch (error) {
      console.log(error.response);

      alert("Logout Failed");
    }
  };

  const menuStyle =
    "flex items-center gap-3 w-full px-5 py-3 rounded-xl font-medium transition-all duration-300";

  return (
    <aside className="w-72 h-screen bg-white shadow-2xl border-r border-gray-200 flex flex-col">

      {/* Logo */}

      <div className="border-b p-6">

        <h1 className="flex items-center gap-2 text-2xl font-bold text-blue-600">

          <LayoutDashboard size={28} />

          Dashboard

        </h1>

      </div>

      {/* Profile */}

      <div className="flex flex-col items-center p-6">

        <img
          src={profile?.photo}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />

        <h2 className="mt-4 text-xl font-semibold text-gray-800 text-center">
          {profile?.name || "User"}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Blog Author
        </p>

      </div>

      {/* Menu */}

      <div className="flex-1 px-4 space-y-3">

        <button
          onClick={() => handleComponent("My Blog")}
          className={`${menuStyle} ${
            component === "My Blog"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          <FileText size={20} />
          My Blogs
        </button>

        <button
          onClick={() => handleComponent("Create Blog")}
          className={`${menuStyle} ${
            component === "Create Blog"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          <SquarePen size={20} />
          Create Blog
        </button>

        <button
          onClick={() => handleComponent("My Profile")}
          className={`${menuStyle} ${
            component === "My Profile"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          <User size={20} />
          My Profile
        </button>

        <button
          onClick={gotoHome}
          className={`${menuStyle} bg-gray-100 hover:bg-green-100`}
        >
          <House size={20} />
          Home
        </button>

      </div>

      {/* Logout */}

      <div className="p-4 border-t">

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
};

export default SideBar;