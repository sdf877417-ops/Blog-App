import axios from "axios";

const Blogs = axios.create({
  baseURL: "https://blog-app-backend-x81h.onrender.com/api/blog",
  // https://blog-app-backend-x81h.onrender.com/api
  withCredentials: true,
});

const users = axios.create({
  baseURL: "https://blog-app-backend-x81h.onrender.com/api/user",
  //"https://blog-app-backend-x81h.onrender.com/api/user/login",

  withCredentials: true,
});

export { Blogs, users };
