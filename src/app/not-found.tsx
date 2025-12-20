import Link from "next/link";

const actions = [
  {
    title: "Go Home",
    href: "/",
    description: "Return to the homepage and continue learning.",
  },
  {
    title: "Browse Courses",
    href: "/#products",
    description: "Explore our programming and cybersecurity courses.",
  },
];

export default function NotFound() {
  return (
    <section className="min-h-[91.7dvh] bg-gray-950 text-white flex items-center justify-center px-6 section-space">
      <div className="max-w-2xl text-center space-y-10">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-primary">404</h1>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Page Not Found
          </h2>
          <p className="text-gray-400">
            The page you are looking for doesn’t exist or has been moved.
            Don’t worry, you can continue your learning journey from here.
          </p>
        </div>

        {/* Actions */}
        <div className="grid sm:grid-cols-2 gap-6">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="bg-gray-900 hover:bg-gray-800 transition rounded-xl p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-primary">
                {action.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
