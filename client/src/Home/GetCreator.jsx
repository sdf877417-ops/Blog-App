// chat gpt
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { users } from "../API/api";

function GetCreator() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const getCreator = async () => {
    try {
      const { data } = await users.get(`/getcreator/${id}`);
      setUser(data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getCreator();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-5">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Cover */}
        <div className="h-52 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 relative">
          {/* Profile Image */}
          <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2">
            <img
              src={user.photo}
              alt={user.name}
              className="w-40 h-40 rounded-full border-8 border-white object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-24 pb-10 px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">{user.name}</h1>

            <p className="text-indigo-600 text-lg mt-2 font-semibold capitalize">
              {user.role}
            </p>

            <p className="text-gray-500 mt-2">{user.email}</p>
          </div>

          {/* Information */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg duration-300">
              <h2 className="text-sm text-gray-500 uppercase mb-2">
                📚 Education
              </h2>

              <p className="text-xl font-semibold text-gray-800">
                {user.education || "Not Available"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg duration-300">
              <h2 className="text-sm text-gray-500 uppercase mb-2">
                📱 Phone Number
              </h2>

              <p className="text-xl font-semibold text-gray-800">
                {user.phone || "Not Available"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg duration-300">
              <h2 className="text-sm text-gray-500 uppercase mb-2">👨‍💻 Role</h2>

              <p className="text-xl font-semibold text-gray-800 capitalize">
                {user.role}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg duration-300">
              <h2 className="text-sm text-gray-500 uppercase mb-2">📧 Email</h2>

              <p className="text-xl font-semibold text-gray-800 break-all">
                {user.email}
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              About Creator
            </h2>

            <p className="text-gray-600 leading-8">
              Hello! I'm <span className="font-bold">{user.name}</span>,
              currently working as a{" "}
              <span className="font-semibold text-indigo-600">{user.role}</span>
              . Passionate about learning new technologies and creating
              beautiful web applications using modern development tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCreator;
