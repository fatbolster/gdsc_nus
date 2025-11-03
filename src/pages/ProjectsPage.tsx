import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Campus Navigator App",
      description:
        "An intuitive map app to help new students navigate the NUS campus with ease.",
      image: "/project1.png",
    },
    {
      title: "Sustainability Tracker",
      description:
        "A tool used to promote sustainable practices among students on campus.",
      image: "/project2.png",
    },
    {
      title: "AI-Powered Tutor",
      description:
        "A personal learning assistant for students, powered by Google's AI technologies.",
      image: "/project3.png",
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold text-center">Our Projects</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <a
                  href="#details"
                  className="mt-3 inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-400"
                >
                  View Details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}