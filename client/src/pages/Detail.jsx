
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../API/api";

function Detail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const getSingleBlog = async () => {
    try {
      const { data } = await Blogs.get(`/getOne/${id}`);
      setBlog(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h2 className="mt-5 text-xl font-semibold text-gray-700">
            Loading Blog...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Blog Image */}
          <div className="w-full">
            <img
              src={blog.blogImage?.url}
              alt={blog.title}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">

            {/* Category */}
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">
              {blog.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-5 leading-tight">
              {blog.title}
            </h1>

            {/* Author Section */}
            <div className="flex flex-wrap items-center justify-between gap-5 mt-8 border-y py-5">

              <div className="flex items-center gap-4">
                <img
                  src={
                    blog.createdBy?.photo ||
                    "https://ui-avatars.com/api/?name=Admin"
                  }
                  alt="author"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {blog.createdBy?.name || "Admin"}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Blog Creator
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  📅{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                <p>⏱️ 5 min read</p>
              </div>

            </div>

            {/* About Heading */}
            <h2 className="text-3xl font-bold mt-10 mb-6">
              About this Blog
            </h2>

            {/* Blog Content */}
            <div className="text-gray-700 text-lg leading-9 whitespace-pre-line">
              {blog.about}
            </div>

            {/* Divider */}
            <div className="border-t mt-12 pt-8">

              <div className="bg-gray-50 rounded-2xl p-6">

                <h3 className="text-2xl font-bold mb-4">
                  📌 Blog Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <p className="text-gray-500 text-sm">
                      Category
                    </p>

                    <h4 className="font-semibold text-lg">
                      {blog.category}
                    </h4>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Author
                    </p>

                    <h4 className="font-semibold text-lg">
                      {blog.createdBy?.name || "Admin"}
                    </h4>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Published
                    </p>

                    <h4 className="font-semibold text-lg">
                      {new Date(blog.createdAt).toDateString()}
                    </h4>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Reading Time
                    </p>

                    <h4 className="font-semibold text-lg">
                      5 Minutes
                    </h4>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Detail;