// import React from "react";
// import { useAuth } from "../context/AuthProvider";

// function Blogs() {
//   const { blogs } = useAuth();
//   console.log(`avlue in blogs : `, blogs);
//   return (
//     <div className="">
//       <>
//         {blogs.map((elem, index) => (
//           <div>
//             <div className="w-screen p-5 text-center">
//               <h1 className="text-sky-200  text-3xl ">{elem.title}</h1>
//               <h1>{elem.about}</h1>

//               <div>
//                 <img
//                   className="w-[200px] h-[250px] text-center"
//                   src={elem?.blogImage?.url || elem?.blogImage}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </>
//     </div>
//   );
// }

// export default Blogs;

// chat gpt 

import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Explore Amazing Blogs
          </h1>

          <p className="text-white/90 mt-5 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            Read high-quality blogs written by talented creators from around
            the world. Learn something new every day.
          </p>

        </div>
      </section>

      {/* Blog List */}
      <div className="max-w-7xl mx-auto px-5 py-14">

        {blogs?.length === 0 ? (
          <div className="flex flex-col justify-center items-center py-24">

            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
              alt=""
              className="w-36"
            />

            <h2 className="text-3xl font-bold mt-6">
              No Blogs Found
            </h2>

            <p className="text-gray-500 mt-2">
              There are no blogs available yet.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (
             <Link to={`${blog._id}`}>
              <div
                key={blog._id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog?.blogImage?.url || blog?.blogImage}
                    alt={blog.title}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1 rounded-full">
                    Blog
                  </span>

                  <h2 className="text-2xl font-bold text-gray-800 mt-4 line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mt-4 leading-7 line-clamp-3">
                    {blog.about}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-8">

                    <button
                      className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition"
                    >
                      Read More
                    </button>

                    <div className="text-sm text-gray-400">
                      Blog
                    </div>

                  </div>

                </div>
              </div>
             </Link>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;