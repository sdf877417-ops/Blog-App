// import React, { createContext, useContext, useEffect, useState } from "react";
// import { Blogs, users } from "../API/api";
// import Cookies from "js-cookie";

// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [blogs, setBlogs] = useState([]);
//   const [profile, setProfile] = useState([]);

//   const fetchBlogs = async () => {
//     try {
//       const { data } = await Blogs.get("/getAllBlogs");
//       setBlogs(data);
//       const token = Cookies.get("token");
//       console.log(`value in cookie :token: `, token);
//     } catch (error) {
//       console.error("eror :", error.message);
//     }
//   };

//   const fetchProfile = async () => {
//     try {
//       // const { data } = await users.get("/getAdmin");
//       const { data } = await users.get("/getMyProfile");
//       setProfile(data);
//       setIsAuthenticated(true);

//     } catch (error) {
//       console.error("eror  rsponse:", error.response);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//     fetchProfile();
//   }, []);

//   return (
//     <>
//       <AuthContext.Provider
//         value={{
//           blogs,
//           setBlogs,
//           profile,
//           setProfile,
//           isAuthenticated,
//           setIsAuthenticated,
//         }}
//       >
//         {children}
//       </AuthContext.Provider>
//       ;
//     </>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

// export default AuthProvider;


// chat gpt 

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Blogs, users } from "../API/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch All Blogs
  // ==========================
  const fetchBlogs = async () => {
    try {
      const { data } = await Blogs.get("/getAllBlogs");
      setBlogs(data);
    } catch (error) {
      console.error("Fetch Blogs Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }
    }
  };

  // ==========================
  // Fetch Logged In User
  // ==========================
  const fetchProfile = async () => {
    try {
      const { data } = await users.get("/getMyProfile");

      setProfile(data);
      setIsAuthenticated(true);

      console.log("Profile Loaded:", data);
    } catch (error) {
      setProfile(null);
      setIsAuthenticated(false);

      if (error.response) {
        console.log("Profile Status:", error.response.status);
        console.log("Profile Error:", error.response.data);
      } else {
        console.log("Profile Network Error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Initial Load
  // ==========================
  useEffect(() => {
    fetchBlogs();
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        setBlogs,

        profile,
        setProfile,

        isAuthenticated,
        setIsAuthenticated,

        loading,

        fetchBlogs,
        fetchProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;