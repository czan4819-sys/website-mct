import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "Bellafista Hambali",
      role: "CEO & Founder",
      bio: "Visionary leader with passion for providing quality internet services",
      image: "/bella.jpeg",
    },
    {
      name: "Frangki Hamdata",
      role: "COMMISSIONER",
      bio: "Experienced leader focused on strategic oversight and corporate excellence",
      image: "/frangki.jpeg",
    },
    {
      name: "Fauzan Hamdata",
      role: "CTO",
      bio: "Expert in high performance networking. fiber optick infrastructure, and large scale wireless distribution systems",
      image: "/fauzan.jpeg",
    },
    {
      name: "Vacant position",
      role: "Manager area",
      bio: "Actively seeking a skilled manager to oversee areaoperations",
      image: "/vacant.jpeg",
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Didirikan pada tahun 2024, kami telah berada dalam misi untuk memberikan solusi teknologi inovatif yang menghubungkan masyarakat
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
                Apa yang dimulai sebagai tim kecil pengembang yang bersemangat telah berkembang menjadi perusahaan teknologi layanan lengkap. Kami percaya pada kekuatan inovasi dan pentingnya memberikan hasil yang luar biasa bagi klien kami.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                Komitmen kami terhadap keunggulan, pembelajaran berkelanjutan, dan kepuasan pelanggan telah menjadikan kami mitra terpercaya bagi bisnis dari semua ukuran. Dari startup hingga klien enterprise, kami telah membantu organisasi memanfaatkan teknologi untuk mencapai tujuan mereka.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Saat ini, tim kami yang terdiri dari lebih dari 50 profesional terus mendorong batas dan memberikan solusi mutakhir yang mendorong nilai bisnis nyata.
              </p>
            </div>
            <div className="relative rounded-lg h-96 overflow-hidden">
              <Image
                src="/pic1.jpeg"
                alt="Kisah Perusahaan Kami"
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
            <p className="text-gray-600 dark:text-gray-400 text-lg">Proyek Selesai</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              200+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Klien Puas</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2 Tahun
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Berbisnis</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50+
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Anggota Tim</p>
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
                🎯 Keunggulan
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Kami berkomitmen untuk memberikan solusi berkualitas tertinggi dengan perhatian cermat terhadap detail
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🤝 Integritas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transparansi, kejujuran, dan praktik etis adalah fondasi dari hubungan kami
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Inovasi
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Kami merangkul teknologi baru dan pendekatan untuk mengatasi tantangan bisnis yang kompleks
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
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
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

      {/* Legal Documents Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Company Legal Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Akta Pendirian
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dokumen resmi pendirian PT MUMTAZ CYBER TEKNOLOGI
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              SIUP
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Surat Izin Usaha Perusahaan untuk layanan internet
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              NPWP
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nomor Pokok Wajib Pajak perusahaan
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
