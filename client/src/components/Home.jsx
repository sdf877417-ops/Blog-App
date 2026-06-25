import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthProvider";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotions from "../Home/Devotional";
import Creator from "../Home/Creator";

function Home() {
  const data = useAuth();

  return (
    <div>
      <Hero />
      <Trending />
      <Devotions/>
      <Creator/>
    </div>
  );
}

export default Home;
