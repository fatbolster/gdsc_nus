import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function EventsPage() {
  const upcoming = [
    {
      title: "Android Dev Workshop",
      date: "Oct 28, 2024",
      tag: "Workshop",
      description:
        "Join us for a hands-on workshop on building your first Android application with Kotlin.",
      color: "rose",
      icon: "📅",
    },
    {
      title: "Cloud Study Jam",
      date: "Nov 15, 2024",
      tag: "Study Jam",
      description:
        "A deep dive into Google Cloud Platform services. Perfect for beginners and experts alike.",
      color: "emerald",
      icon: "☁️",
    },
    {
      title: "Tech Talk: AI & ML",
      date: "Dec 05, 2024",
      tag: "Tech Talk",
      description:
        "Listen to industry experts discuss the latest trends and breakthroughs in AI and Machine Learning.",
      color: "amber",
      icon: "🔊",
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold text-center">Upcoming Events</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {upcoming.map((e, i) => {
            const colorClasses =
              e.color === "rose"
                ? "bg-rose-100 text-rose-600"
                : e.color === "emerald"
                ? "bg-emerald-100 text-emerald-600"
                : "bg-amber-100 text-amber-600";

            return (
              <article
                key={i}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${colorClasses}`}
                  >
                    <span className="text-xl">{e.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-slate-400">
                      {e.date}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {e.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {e.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#register"
                    className="block w-full rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-400"
                  >
                    Register Now
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}