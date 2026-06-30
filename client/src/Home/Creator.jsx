import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { users } from "../API/api.js";

// get all the admins
function Creator() {
  const [admin, setAdmin] = useState();
  const getAdmin = async () => {
    try {
      const { data } = await users.get("/getAdmin");
      setAdmin(data);
    } catch (error) {
      console.error("error : ", error.message);
      console.log(error.response);
      toast.error(error.response?.message);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);
  return (
    <div className="bg-gray-200">
      <h1 className="text-3xl font-black f-bold  p-2 ">Admins</h1>
      <div className="max-w-screen">
        {admin && admin.length > 0 ? (
          <>
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10  m-5 ">
              {admin.map((elem) => (
                <div key={elem._id} className="text-black">
                  <div className="text-center flex flex-col justify-center items-center">
                    <img
                      src={elem.photo}
                      alt="admin image"
                      className="h-70 w-70 rounded-[50%] p-3"
                    />
                    <p className="text-center text-2xl p-2 m-2">{elem.name}</p>
                    <h1 className="text-black font-light"> admin</h1>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div>data not founds cannot get admins</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Creator;
