// import axios from "axios";

// const Blogs = axios.create({
//   baseURL: "http://localhost:9000/api/blog",
//   withCredentials: true,
// });

// const users = axios.create({
//   baseURL: "http://localhost:9000/api/user",
//   withCredentials: true,
// });

// export { Blogs , users};

// backend deployed

import axios from "axios";

const Blogs = axios.create({
  baseURL: "https://blog-app-ecm9.onrender.com/api/blog",
  withCredentials: true,
});

const users = axios.create({
  baseURL: "https://blog-app-ecm9.onrender.com/api/user",

  withCredentials: true,
});

export { Blogs, users };
