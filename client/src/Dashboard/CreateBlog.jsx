import React, { useEffect, useState } from "react";
import { Blogs } from "../API/api";
import toast from "react-hot-toast";

function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    about: "",
    category: "",
    adminName: "",
    adminPhoto: "",
    blogImage: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "blogImage") {
      setForm({ ...form, blogImage: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    let err = {};

    if (!form.title.trim()) err.title = "Title is required";
    if (!form.about.trim()) err.about = "About is required";
    if (!form.category.trim()) err.category = "Category is required";
    if (!form.adminName.trim()) err.adminName = "Admin Name is required";
    // if (!form.adminPhoto.trim()) err.adminPhoto = "Admin Photo URL is required";
    if (!form.blogImage) err.blogImage = "Blog Image is required";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("about", form.about);
    formData.append("category", form.category);
    formData.append("adminName", form.adminName);
    formData.append("adminPhoto", form.adminPhoto);
    formData.append("blogImage", form.blogImage);

    console.log(formData);

    // axios.post(...)
    try {
      const data = {};
      const res = await Blogs.post("/post", formData);
      console.log("res.data :", res.data);
      setFormData(" ");
      toast.success(res?.data?.mesage || " blog created ! ");
      alert(res.data.mesage)
    } catch (error) {
      console.log("erorr at create blog :::---->", error?.response);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Blog
        </h1>

        {/* Title */}

        <div>
          <label className="font-semibold">Blog Title</label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter Blog Title"
            className="w-full border rounded-lg p-3 mt-2 outline-none focus:border-blue-500"
          />

          <p className="text-red-500 text-sm">{errors.title}</p>
        </div>

        {/* Category */}

        <div>
          <label className="font-semibold">Category</label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2 outline-none focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option>Technology</option>
            <option>Programming</option>
            <option>Education</option>
            <option>Sports</option>
            <option>Business</option>
            <option>Health</option>
          </select>

          <p className="text-red-500 text-sm">{errors.category}</p>
        </div>

        {/* About */}

        <div>
          <label className="font-semibold">About Blog</label>

          <textarea
            rows="5"
            name="about"
            value={form.about}
            onChange={handleChange}
            placeholder="Write Blog..."
            className="w-full border rounded-lg p-3 mt-2 outline-none resize-none focus:border-blue-500"
          ></textarea>

          <p className="text-red-500 text-sm">{errors.about}</p>
        </div>

        {/* Admin Name */}

        <div>
          <label className="font-semibold">Admin Name</label>

          <input
            type="text"
            name="adminName"
            value={form.adminName}
            onChange={handleChange}
            placeholder="Enter Admin Name"
            className="w-full border rounded-lg p-3 mt-2 outline-none focus:border-blue-500"
          />

          <p className="text-red-500 text-sm">{errors.adminName}</p>
        </div>

        {/* Admin Photo */}

        <div>
          <label className="font-semibold">Admin Photo URL</label>

          <input
            type="text"
            name="adminPhoto"
            value={form.adminPhoto}
            onChange={handleChange}
            placeholder="Paste Photo URL"
            className="w-full border rounded-lg p-3 mt-2 outline-none focus:border-blue-500"
          />

          <p className="text-red-500 text-sm">{errors.adminPhoto}</p>
        </div>

        {/* Blog Image */}

        <div>
          <label className="font-semibold">Blog Image</label>

          <input
            type="file"
            name="blogImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />

          <p className="text-red-500 text-sm">{errors.blogImage}</p>
        </div>

        {/* Button */}

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition">
          Publish Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
