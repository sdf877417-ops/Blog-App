// import React from "react";

// function Contact() {
//   return (
//     <div className="w-max-screen h-max-screen ">
//       <div className="flex justify-center items-center mt-9">
//         {/* box  */}
//         <div className=" mt-8 bg-gray-300">
//           <h1 className="text-center m-6 text-2xl">Contact Us </h1>
//           <div className="flex justify-evenly">
//             <div className="p-4">
//               <p className="text-xl p-3 m-2">send us a message</p>
//               <input
//                 type="text"
//                 placeholder="name"
//                 className="text-xl p-3 m-2 bg-gray-500 rounded-2xl"
//               />
//               <br />
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="text-xl p-3 m-2 bg-gray-500 rounded-2xl"
//               />
//               <br />
//               <textarea
//                 name="message"
//                 placeholder="message"
//                 className="text-xl p-3 m-3  bg-gray-500 rounded-2xl"
//               ></textarea>
//               <br />

//               <button className="text-center m-3 p-3 bg-gray-700 w-69 rounded-2xl fill-black font-bold text-xl">
//                 send message
//               </button>
//             </div>
//             <div className="">
//               <h1>+ 91879883747 </h1>
//               <h1> email@gmail</h1>
//               <h1>Loccation icon </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side */}
          <div className="p-6 md:p-8">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Contact
            </span>

            <h1 className="text-3xl font-bold text-gray-800 mt-2">
              Get In Touch
            </h1>

            <p className="text-gray-500 mt-3 mb-8">
              Have any questions or feedback? We'd love to hear from you. Fill
              out the form and our team will get back to you soon.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full p-4 border border-gray-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="bg-blue-600 text-white p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-blue-100">+91 8798833747</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">
                  📧
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-blue-100">email@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-blue-100">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-blue-400 pt-6">
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>

              <p className="text-blue-100">Monday - Friday</p>

              <p className="text-blue-100">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
