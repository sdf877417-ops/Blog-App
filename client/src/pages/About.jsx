import { useAuth } from "../context/AuthProvider";

const About = () => {
  const { profile } = useAuth();
  console.log(`value in profile :--->`,profile)
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          About <span className="text-cyan-400">{profile.name}</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-8">
          Welcome to my blogging platform where technology meets creativity. I
          share practical programming knowledge, modern web development
          tutorials, career guidance, and real-world software engineering
          concepts in a simple and understandable way.
        </p>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Who Am I?</h2>

          <p className="text-gray-300 leading-8">
            Hi, I'm <strong>{profile?.name}</strong>, a passionate MERN Stack
            Developer and technology enthusiast who enjoys building scalable web
            applications and sharing practical knowledge with developers.
          </p>

          <p className="text-gray-300 leading-8 mt-4">
            My goal is to simplify complex programming topics so beginners can
            learn with confidence while helping experienced developers improve
            their skills through practical examples and clean coding practices.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">My Mission</h2>

          <p className="text-gray-300 leading-8">
            I believe technology should be accessible to everyone. This platform
            focuses on high-quality educational content, real-world development
            techniques, clean architecture, backend engineering, and modern
            JavaScript technologies.
          </p>

          <p className="text-gray-300 leading-8 mt-4">
            Every article is designed to provide practical value, improve
            problem-solving skills, and help developers become industry-ready.
          </p>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          What You'll Discover
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              MERN Stack
            </h3>

            <p className="text-gray-300">
              Learn MongoDB, Express.js, React, and Node.js through practical,
              project-based tutorials and production-ready techniques.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Backend Development
            </h3>

            <p className="text-gray-300">
              Explore authentication, APIs, security, databases, file uploads,
              email services, clean architecture, and scalable backend systems.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Career Growth
            </h3>

            <p className="text-gray-300">
              Get interview preparation tips, project ideas, portfolio advice,
              learning roadmaps, and guidance to become a professional software
              developer.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Technologies I Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
            "REST API",
            "Git",
            "GitHub",
            "Cloudinary",
            "Multer",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-cyan-500/20 border border-cyan-400 px-5 py-3 rounded-full text-cyan-300 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Thank You For Visiting</h2>

        <p className="text-gray-300 mt-6 leading-8 text-lg">
          Thank you for being part of this learning journey. Whether you're a
          beginner taking your first steps or an experienced developer looking
          to sharpen your skills, this platform is built to help you grow. Keep
          learning, keep building, and never stop creating.
        </p>

        <h3 className="text-3xl font-bold text-cyan-400 mt-10">
          — {profile?.name}
        </h3>

        <p className="text-gray-400 mt-2">
          MERN Stack Developer • Technical Blogger • Lifelong Learner
        </p>
      </section>
    </div>
  );
};

export default About;
