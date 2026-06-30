import React from "react";
import { useAuth } from "../context/AuthProvider";

const UpateBlog = () => {
  const { profile, isAuthenticated } = useAuth();
  return (
    <div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
    </div>
  );
};

export default UpateBlog;
