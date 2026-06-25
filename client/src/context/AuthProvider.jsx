import React, { createContext, useContext, useEffect, useState } from "react";
import { Blogs } from "../API/api";
import { data } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await Blogs.get("/getAllBlogs");
      console.log(`value in data at context : `, data);
      setBlogs(data);
    } catch (error) {
      console.error("eror :", error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ blogs }}>{children}</AuthContext.Provider>;
    </>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
