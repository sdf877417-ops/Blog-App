// import React, { useEffect, useState } from "react";
// import { Blogs } from "../API/api.js";
// import { useAuth } from "../context/AuthProvider.jsx";

// function Myblog() {
//   const { blogs, setBlogs } = useAuth();

//   const [myblogs, setMyblogs] = useState([]);

//   const getMyBlogs = async () => {
//     try {
//       const { data } = await Blogs.get("/myBlog");
//       console.log(`in blog MYBLOgs, :`, data);
//       setMyblogs(data);
//     } catch (error) {
//       console.log("errro", error.response);
//     }
//   };

//   const handleDelete = (blog_id) => {
//     try {
//       setMyblogs((prev) => prev.filter((elem) => elem._id !== blog_id));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getMyBlogs();
//   }, []);
//   return (
//     <div>
//       <div className=" ">
//         <div className="  flex justify-between gap-7 flex-wrap ">
//           {myblogs.map((elem, index) => (
//             <div className="w-[28%]">
//               <h1 className="text-3xl bg-amber-300 rounded-2xl">
//                 {elem.title}
//               </h1>
//               <h1>{elem.about}</h1>
//               <img
//                 className="h-[200px] w-[200px] "
//                 src={elem.blogImage?.url}
//                 alt="oimage"
//               />
//               <div className="flex justify-between ">
//                 <button  className="text-2xl bg-green-700 rounded-3xl p-2 "
//                 onClick={() => handleUpdate(elem._id)}>update</button>
//                 <button  className="text-2xl bg-red-700 rounded-3xl p-2 "
//                  onClick={() => handleDelete(elem._id)}>delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Myblog;


// chat gpt code 

import React, { useEffect, useState } from "react";
import { Pencil, Trash2, FileText } from "lucide-react";
import { Blogs } from "../API/api.js";

function Myblog() {
  const [myblogs, setMyblogs] = useState([]);

  const getMyBlogs = async () => {
    try {
      const { data } = await Blogs.get("/myBlog");
      setMyblogs(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getMyBlogs();
  }, []);

  const handleDelete = (blog_id) => {
    setMyblogs((prev) => prev.filter((blog) => blog._id !== blog_id));
  };

  return (
    <div className="w-full">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          My Blogs
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all your published blogs here.
        </p>

      </div>

      {/* Empty State */}

      {myblogs.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-16 text-center">

          <FileText
            size={70}
            className="mx-auto text-gray-300"
          />

          <h2 className="text-2xl font-semibold mt-6">
            No Blogs Found
          </h2>

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
                    onClick={() => handleUpdate(elem._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300"
                  >
                    <Pencil size={18} />
                    Update
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