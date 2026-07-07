import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginsuperAdmin from "./LoginSuperAdmin";
import DeleteBlogBySuperAdmin from "./DeleteBlogBySuperAdmin";

function SprAdmin() {
  const naviaget = useNavigate();
  const handleNavigate = (path) => {
    return naviaget(`/${path}`);
  };
  return (
    <div>
      <h1>Super Admin !!</h1>

      <button onClick={() => handleNavigate("DeleteUsers")}>delete user</button>

      <br />

      <button onClick={() => handleNavigate("DeleteBlog")}>delete blog</button>
    </div>
  );
}

export default SprAdmin


