import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "Fauzan Hamdata",
      role: "CEO & Founder",
      bio: "Visionary leader with passion for providing quality internet services",
      image: "/fauzan.jpeg",
    },
    {
      name: "Frangki Hamdata",
      role: "CTO",
      bio: "Expert in cloud architecture and scalable systems",
    },
    {
      name: "Rina Putri",
      role: "Head of Design",
      bio: "Award-winning designer with passion for UX/UI",
    },
    {
      name: "Budi Santoso",
      role: "Lead Developer",
      bio: "Full-stack engineer with expertise in modern frameworks",
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About MyCompany
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Founded in 2024, we have been on a mission to deliver innovative technology solutions that connect people
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                What started as a small team of passionate developers has grown into a full-service technology company. We believe in the power of innovation and the importance of delivering exceptional results for our clients.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                Our commitment to excellence, continuous learning, and client satisfaction has made us a trusted partner for businesses of all sizes. From startups to enterprise clients, we have helped organizations leverage technology to achieve their goals.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Today, our team of 50+ professionals continues to push boundaries and deliver cutting-edge solutions that drive real business value.
              </p>
            </div>
            <div className="relative rounded-lg h-96 overflow-hidden">
              <Image
                src="/pic1.jpeg"
                alt="Our Company Story"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          By The Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              500+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              200+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2 Yrs
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">In Business</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Team Members</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🎯 Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We are committed to delivering the highest quality solutions with meticulous attention to detail
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🤝 Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transparency, honesty, and ethical practices are the foundation of our relationships
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We embrace new technologies and approaches to solve complex business challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg transition"
            >
              {member.image ? (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="text-6xl mb-4">👤</div>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
