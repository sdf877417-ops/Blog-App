import React, { useEffect, useState } from "react";
import { Pencil, Trash2, FileText, Link } from "lucide-react";
import { Blogs } from "../API/api.js";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Myblog() {
  const [myblogs, setMyblogs] = useState([]);
  const { id } = useParams();
  const getMyBlogs = async () => {
    try {
      const { data } = await Blogs.get("/myBlog");
      setMyblogs(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // update logic
  const handleUpdateBlog = async (id) => {
    try {
    } catch (error) {
      console.log("error response :-->", error.response);
    }
  };

  useEffect(() => {
    getMyBlogs();
  }, []);

  //  delete blog
  const handleDelete = async (blog_id) => {
    setMyblogs((prev) => prev.filter((blog) => blog._id !== blog_id));
    const res = await Blogs.delete(`/delete/${blog_id}`);
    toast.success(res.data.message || "deleted ");
  };

  return (
    <div className="w-full">
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Blogs</h1>

        <p className="text-gray-500 mt-2">
          Manage all your published blogs here.
        </p>
      </div>

      {/* Empty State */}

      {myblogs.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
          <FileText size={70} className="mx-auto text-gray-300" />

          <h2 className="text-2xl font-semibold mt-6">No Blogs Found</h2>

          <p className="text-gray-500 mt-2">
            Create your first blog to see it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {myblogs.map((elem) => (
            <div
              key={elem._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}

              <img
                src={elem.blogImage?.url}
                alt={elem.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}

              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
                  {elem.title}
                </h2>

                <p className="text-gray-600 mt-3 line-clamp-4 flex-1">
                  {elem.about}
                </p>

                {/* Buttons */}

                <div className="flex gap-3 mt-6">
                  <button
                    // onClick={() => handleUpdateBlog(elem._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300"
                  >
                    <Pencil size={18} />
                    update
                    <Link to={`/`} />
                  </button>
                  <button
                    onClick={() => handleDelete(elem._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition duration-300"
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Myblog;
