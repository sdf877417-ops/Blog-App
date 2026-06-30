// import React, { useEffect, useState } from "react";
// import { users } from "../API/api.js";
// import { Divide } from "lucide-react";
// import { useAuth } from "../context/AuthProvider";

// function MyProfile() {
//   const { profile } = useAuth();
//   console.log("value in profile : ------->", profile);

//   {
//     if (profile) {
//       return (
//         <div>
//           <div>{profile.name}</div>
//           <h1>{profile.role}</h1>
//           <img src={profile?.photo} alt="" />
//         </div>
//       );
//     } else {
//       return <div>no data in myprofile</div>;
//     }
//   }
// }

// export default MyProfile;

// chat gpt code

import React, { useEffect, useState } from "react";
import { Mail, GraduationCap, ShieldCheck, User, Phone } from "lucide-react";
import { useAuth } from "../context/AuthProvider";
import { users } from "../API/api";
import toast from "react-hot-toast";

function MyProfile() {
  const { profile } = useAuth();

  const [isUpdating, setIsUpdating] = useState(false);

  const [updatedData, setUpdatedData] = useState();

  const handlUpdateSubmit = async (data) => {
    if (!updatedData.name.trim()) {
      toast.error("all fileds are requiired ");
      return;
    }
    // alert("called !");
    setIsUpdating(true);
    console.log("value in data :", data);
    try {
      const upd = await users.put(`/updateUser/${profile._id}`, data);
      toast.success("user updated");
      setUpdatedData("");
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (profile) {
      setUpdatedData({
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        education: profile.education,
        role: profile.role,
        photo: profile?.photo,
      });
    }
  }, [profile]);
  console.log(`value in nprofile :`, profile);
  console.log(`value in updatedData :::---???>>>`, updatedData);

  if (isUpdating == true) {
    return (
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Profile</h1>

          <p className="text-gray-500 mt-2">
            Manage your personal information and account.
          </p>
        </div>

        {/* Card */}

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Top Banner */}

          <div className="h-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

          {/* Content */}

          <div className="px-8 pb-10">
            {/* Image */}

            <div className="flex justify-center -mt-20">
              <img
                src={updatedData?.photo}
                alt={updatedData?.name}
                className="w-40 h-40 rounded-full border-8 border-white object-cover shadow-xl"
              />
            </div>

            {/* Name */}

            <div className="text-center mt-5">
              <h2 className="text-3xl font-bold text-gray-800">
                {updatedData?.name}
              </h2>

              <p className="text-gray-500 mt-1">{updatedData?.role}</p>
            </div>

            {/* Info */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="text-blue-600" size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Full Name</p>

                  <input
                    type="text"
                    value={updatedData?.name}
                    onChange={(e) =>
                      setUpdatedData((prev) => {
                        return { ...prev, name: e.target.value };
                      })
                    }
                  />
                  {/* <h3 className="font-semibold text-lg">{updatedData?.name}</h3> */}
                </div>
              </div>

              {/* Email  */}
              <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Mail className="text-green-600" size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <h3 className="font-semibold text-lg break-all">
                    <input
                      type="text"
                      value={updatedData?.email}
                      onChange={(e) =>
                        setUpdatedData((prev) => {
                          return { ...prev, email: e.target.value };
                        })
                      }
                    />
                    {/* {updatedData?.email} */}
                  </h3>
                </div>
              </div>

              {/* // conatct  */}

              <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-cyan-100 p-3 rounded-full">
                  <Phone className="text-cyan-600" size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>

                  <h3 className="font-semibold text-lg">
                    <input
                      type="text"
                      value={updatedData?.phone}
                      onChange={(e) =>
                        setUpdatedData((prev) => {
                          return { ...prev, phone: e.target.value };
                        })
                      }
                    />
                    {/* {updatedData?.phone || "Not Available"} */}
                  </h3>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <GraduationCap className="text-yellow-600" size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Education</p>

                  <h3 className="font-semibold text-lg">
                    <input
                      type="text"
                      value={updatedData?.education}
                      onChange={(e) =>
                        setUpdatedData((prev) => {
                          return { ...prev, education: e.target.value };
                        })
                      }
                    />
                    {/* {updatedData?.education} */}
                  </h3>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <ShieldCheck className="text-purple-600" size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Role</p>

                  <input
                    type="text"
                    value={updatedData?.role}
                    onChange={(e) =>
                      setUpdatedData((prev) => {
                        return { ...prev, role: e.target.value };
                      })
                    }
                  />
                  {/* <h3 className="font-semibold text-lg">{updatedData?.role}</h3> */}
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
              <button
                onClick={() => handlUpdateSubmit(updatedData)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Update Profile
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Delete Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Profile</h1>

        <p className="text-gray-500 mt-2">
          Manage your personal information and account.
        </p>
      </div>

      {/* Card */}

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Top Banner */}

        <div className="h-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

        {/* Content */}

        <div className="px-8 pb-10">
          {/* Image */}

          <div className="flex justify-center -mt-20">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-40 h-40 rounded-full border-8 border-white object-cover shadow-xl"
            />
          </div>

          {/* Name */}

          <div className="text-center mt-5">
            <h2 className="text-3xl font-bold text-gray-800">{profile.name}</h2>

            <p className="text-gray-500 mt-1">{profile.role}</p>
          </div>

          {/* Info */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="text-blue-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Full Name</p>

                <h3 className="font-semibold text-lg">{profile.name}</h3>
              </div>
            </div>

            {/* Email  */}
            <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="text-green-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>

                <h3 className="font-semibold text-lg break-all">
                  {profile.email}
                </h3>
              </div>
            </div>

            {/* // conatct  */}

            <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Phone className="text-cyan-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone Number</p>

                <h3 className="font-semibold text-lg">
                  {profile?.phone || "Not Available"}
                </h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <GraduationCap className="text-yellow-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Education</p>

                <h3 className="font-semibold text-lg">{profile.education}</h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <ShieldCheck className="text-purple-600" size={24} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Role</p>

                <h3 className="font-semibold text-lg">{profile.role}</h3>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
            <button
              onClick={() => setIsUpdating(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Update Profile
            </button>

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
