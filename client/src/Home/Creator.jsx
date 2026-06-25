import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { users } from "../API/api.js";

// get all the admins
function Creator() {
  const [admin, setAdmin] = useState();
  const getAdmin = async () => {
    try {
      const { data } = await users.get("/getAdmin");
      console.log(`value at creatprs data :`, data);
      setAdmin(data);
    } catch (error) {
      console.error("error : ", error.message);
      console.log(error.response?.data);
      toast.error(error.response?.message);
    }
  };

  useEffect(() => {
    getAdmin();
    console.log(`values in admins :`, admin);
  }, []);
  return (
    <div className="bg-gray-200">
      <h1 className="text-3xl font-black p-2 ">Admins</h1>
      <div className="max-w-screen">
        {admin && admin.length > 0 ? (
          <>
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10  m-5 ">
              {admin.map((elem) => (
                <div key={elem._id} className="text-black">
                  <div className="text-center flex flex-col ">
                    <img
                      src={elem.photo}
                      alt="admin image"
                      className="h-70 w-70 rounded-[50%] p-3"
                    />
                    <p className="text-center">{elem.name}</p>
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
