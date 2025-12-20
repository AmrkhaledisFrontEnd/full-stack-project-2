const features = [
  {
    title: "High Quality Courses",
    description:
      "Our courses are carefully designed to deliver clear, practical, and up-to-date knowledge in programming and modern technologies.",
  },
  {
    title: "Career Focused Learning",
    description:
      "We focus on real world skills that help you build projects, strengthen your portfolio, and prepare for the job market.",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from experienced developers and security specialists who understand both theory and real industry needs.",
  },
  {
    title: "Flexible Learning",
    description:
      "Study at your own pace, anytime and anywhere, with lifetime access to all purchased courses.",
  },
];

const stats = [
  { label: "Students Enrolled", value: "10,000+" },
  { label: "Available Courses", value: "50+" },
  { label: "Technologies Covered", value: "15+" },
  { label: "Hours of Content", value: "1,200+" },
];

export default function AboutPage() {
  return (
    <section className="py-20 px-6 section-space">
      <div className="container-css lg:mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6 w-full">
          <h1 className=" xl:text-5xl lg:text-4xl font-bold sm:text-3xl text-2xl text-primary w-full">
            About Our Learning Platform
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We are an online educational store dedicated to teaching programming,
            cybersecurity, and modern software technologies through structured,
            practical, and easy-to-follow courses.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 lg:gap-12 gap-7 items-center">
          <div className="space-y-6">
            <h2 className="sm:text-3xl text-2xl font-semibold text-primary md:text-start text-center">
              Empowering Developers for the Future
            </h2>
            <p className="text-gray-600 leading-relaxed md:text-start text-center">
              Our mission is to make high-quality technical education accessible
              to everyone. Whether you are a beginner taking your first steps in
              programming or an advanced learner aiming to master cybersecurity,
              we provide clear learning paths that help you grow with confidence.
            </p>
            <p className="text-gray-600 leading-relaxed md:text-start text-center">
              We believe that learning should be practical, engaging, and directly
              connected to real-world applications. That’s why our courses focus
              on hands-on projects and real use cases.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl sm:p-8 p-3 space-y-6 shadow">
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-primary sm:text-start text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 sm:text-start text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-2 text-center ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 space-y-2 hover:scale-105 transition-css hover:rotate-1 cursor-default shadow"
            >
              <p className="sm:text-3xl text-xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-gray-300 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl text-primary font-semibold">
            Our Vision
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We aim to become a trusted destination for anyone who wants to learn
            programming, cybersecurity, and emerging technologies in a structured
            and professional way. Our goal is not just to teach code, but to help
            learners think like problem solvers and confident tech professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
