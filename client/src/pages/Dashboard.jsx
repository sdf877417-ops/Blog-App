import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import SideBar from "../Dashboard/SideBar";
import MyProfile from "../Dashboard/MyProfile";
import CreateBlog from "../Dashboard/CreateBlog";
import Myblog from "../Dashboard/Myblog";

function Dashboard() {
  const [component, setComponent] = useState("My Profile");
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">

      {/* Mobile Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-screen z-50
        transform transition-transform duration-300
        ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }
        lg:translate-x-0`}
      >
        <SideBar
          component={component}
          setComponent={setComponent}
          closeSidebar={() => setOpenSidebar(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-62">

        {/* Top Navbar */}
        <div className="sticky top-0 z-30 bg-white shadow-md h-16 px-5 flex items-center justify-between">

          <button
            className="lg:hidden"
            onClick={() => setOpenSidebar(true)}
          >
            <Menu size={28} />
          </button>

          <h1 className="text-2xl font-bold text-gray-800 ">
            Dashboard
            
          </h1>

          <div></div>

        </div>

        {/* Page Content */}
        <div className="p-5 md:p-8">

          {component === "My Profile" && <MyProfile />}

          {component === "Create Blog" && <CreateBlog />}

          {component === "My Blog" && <Myblog />}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;