import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { users } from "../API/api.js";
import { Link } from "react-router-dom";

function Creator() {
  const [admin, setAdmin] = useState([]);

  const getAdmin = async () => {
    try {
      const { data } = await users.get("/getAdmin");
      setAdmin(data);
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(error.response?.data?.message || "Failed to fetch admins");
    }
  };

  const getProfile = async (id) => {
    try {
      alert(id);
    } catch (error) {
      console.log("eror :", error.response);
    }
  };
  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-5">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="uppercase tracking-[4px] text-indigo-600 font-semibold text-sm">
          Meet Our Team
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
          Blog Creators
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Behind every great article is a passionate creator. Meet the talented
          admins who write, manage and bring valuable content to our blogging
          community.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto">
        {admin.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {admin.map((elem) => (
              <div
                key={elem._id}
                className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Gradient */}
                <div className="h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                {/* Image */}
                <div className="flex justify-center -mt-14">
                  <img
                    src={elem.photo}
                    alt={elem.name}
                    className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="px-6 pb-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mt-5">
                    {elem.name}
                  </h2>

                  <span className="inline-block mt-3 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
                    Administrator
                  </span>

                  <p className="text-gray-500 text-sm mt-5 leading-6">
                    Passionate about creating meaningful content, managing the
                    platform, and helping readers discover quality articles.
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center gap-8 mt-7">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {Math.ceil(Math.random() * 200 * Math.random())}+
                      </h3>
                      <p className="text-gray-500 text-sm">Blogs</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {Math.ceil(Math.random() * 20)}★
                      </h3>
                      <p className="text-gray-500 text-sm">Quality</p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link to={`getcreator/${elem._id}`}>
                    <button
                      className="mt-8 w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-indigo-600 transition duration-300 cursor-pointer"
                      // onClick={() => getProfile(elem._id)}
                    >
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center py-24">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-5xl">
              👨‍💻
            </div>

            <h2 className="text-2xl font-bold mt-6 text-gray-800">
              No Admins Found
            </h2>

            <p className="text-gray-500 mt-2">
              We couldn't find any administrators at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Creator;
