import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { Blogs } from "../API/api";
import toast from "react-hot-toast";
import axios from "axios";

function DeleteBlogBySuperAdmin() {
  const { setBlogs, blogs, profile } = useAuth();

  const deleteBlog = async (ide) => {
    try {
      const res = await axios.delete(`http://localhost:9000/api/user/delete/superAdmin/blog/${ide}`,);
      console.log("res-->", res.data);
      //   localhost:9000/api/user/delete/superAdmin/blog/`${ide}`
      setBlogs((prev) => prev.filter((elem) => elem._id != ide));
      toast.success(res.data.message);
    } catch (error) {
      console.log("error at del blog api", error);
      console.log(error?.response)
    }
  };

  return (
    <div className="w-max-screen">
      {blogs && blogs.length > 0 ? (
        <div className="min-h-screen bg-gray-100 p-6 ">
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
            Latest Blogs
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-10 m-5">
            {blogs.map((elem) => (
              <div
                key={elem._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              >
                {/* Image */}

                <img
                  src={elem.blogImage?.url || elem.blogImage}
                  // src={elem.blogImage?}
                  alt={elem.title}
                  className="w-full h-56 object-cover"
                />

                <h2 className="text-2xl font-bold text-blue-400  font-bold text-center m-3">
                  {elem.category}
                </h2>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-slate-800 mb-2">
                    {elem.title}
                  </h2>

                  <p className="text-blue-600 font-semibold mb-3">
                    By {elem.name}
                  </p>

                  <p className="text-gray-600 line-clamp-3">{elem.about}</p>

                  <button className="mt-5 mx-3 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                    Read More
                  </button>

                  <button
                    className="mt-5 mx-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={() => deleteBlog(elem._id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-center text-2xl font-bold mt-10">No Blogs Found</h1>
      )}
    </div>
  );
}

export default DeleteBlogBySuperAdmin;
