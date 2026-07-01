import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useParams } from "react-router-dom";

const UpateBlog = () => {
  const { profile, isAuthenticated } = useAuth();
  const { id } = useParams(); 
  return (
    <div>
      
    </div>
  );
};

export default UpateBlog;
