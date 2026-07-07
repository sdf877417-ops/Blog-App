import React, { useEffect, useState } from "react";
import { users } from "../API/api.js";
import { data } from "react-router-dom";

function DeleteUsers() {
  const [users, setUsers] = useState();
  const getAllUsers = async () => {
    try {
      const { data } = await users.get("/getAllUsers");
      console.log(`value in data :->`, data);
      setUsers(data);
    } catch (error) {
      console.log("error :::--->>", error.response);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>delete users !!!</h1>
      <div>
        {/* {users.map((elem, index) => (
          <div>
            <h1>{elem.name}</h1>
          </div>
        ))} */}                                      
      </div>
    </div>
  );
}

export default DeleteUsers;

