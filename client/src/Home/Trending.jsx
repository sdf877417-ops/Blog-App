import React from "react";
import { useAuth } from "../context/AuthProvider";

function Trending() {
  const { blogs } = useAuth();

  return (
    <div className="w-max-screen">
      {blogs && blogs.length > 0 ? (
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-5xl font-bold  text-left text-slate-800 mb-10">
            Trending
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
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

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-slate-800 mb-2">
                    {elem.title}
                  </h2>

                  <p className="text-blue-600 font-semibold mb-3">
                    By {elem.name}
                  </p>

                  <p className="text-gray-600 line-clamp-3">{elem.about}</p>

                  <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                    Read More
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

export default Trending;
