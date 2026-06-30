import React, { createContext, useContext, useEffect, useState } from "react";
import { Blogs, users } from "../API/api";
import Cookies from "js-cookie";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await Blogs.get("/getAllBlogs");
      setBlogs(data);
      const token = Cookies.get("token");
      console.log(`value in cookie :token: `, token);
    } catch (error) {
      console.error("eror :", error.message);
    }
  };

  const fetchProfile = async () => {
    try {
      // const { data } = await users.get("/getAdmin");
      const { data } = await users.get("/getMyProfile");
      setProfile(data);
      setIsAuthenticated(true);

    } catch (error) {
      console.error("eror  rsponse:", error.response);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchProfile();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          blogs,
          setBlogs,
          profile,
          setProfile,
          isAuthenticated,
          setIsAuthenticated,
        }}
      >
        {children}
      </AuthContext.Provider>
      ;
    </>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
