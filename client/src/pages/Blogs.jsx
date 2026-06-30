import React from "react";
import { useAuth } from "../context/AuthProvider";

function Blogs() {
  const { blogs } = useAuth();
  console.log(`avlue in blogs : `, blogs);
  return (
    <div className="">
      <>
        {blogs.map((elem, index) => (
          <div>
            <div className="w-screen p-5 text-center">
              <h1 className="text-sky-200  text-3xl ">{elem.title}</h1>
              <h1>{elem.about}</h1>

              <div>
                <img
                  className="w-[200px] h-[250px] text-center"
                  src={elem?.blogImage?.url || elem?.blogImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}

export default Blogs;
