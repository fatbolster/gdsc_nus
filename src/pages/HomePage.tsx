import React, { useState } from "react";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-indigo-500/40">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Community />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white-200">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="inline-flex items-center gap-2">
          <GdscDots />
          <span className="font-bold">GDSC NUS</span>
        </a>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#community">
            Community
          </a>
          <a className="hover:text-white" href="#events">
            Events
          </a>
          <a className="hover:text-white" href="#projects">
            Projects
          </a>
        </div>
        <a
          href="#join"
          className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-blue-400"
        >
          Join Upcoming Events
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-[1.3fr_.9fr]"
    >
      {/* radial accents */}
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />

      <div>
        <h1 className="bg-gradient-to-r from-sky-400 via-emerald-300 to-amber-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          Build. Learn. Connect.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Welcome to the Google Developer Student Club at the National
          University of Singapore. Join us to learn, build, and grow with a
          passionate community of developers.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="#events"
            className="inline-flex items-center rounded-full bg-amber-300 px-4 py-2 font-semibold text-slate-900 hover:bg-amber-200"
          >
            See Events
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 font-semibold text-white hover:bg-white/5"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="md:justify-self-end">
        <div className="flex h-60 w-[360px] items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-500/15 to-sky-400/10 p-6 text-center md:h-64">
          <div>
            <div className="font-semibold">Add a club photo</div>
            <p className="mt-1 text-xs text-slate-400">
              Replace this box with an{" "}
              <code className="font-mono">&lt;img /&gt;</code> later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">About Us</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold">Our Mission</h3>
          <p className="mt-2 text-slate-600">
            To cultivate empathetic & passionate learners of technology while
            equipping them with relevant skills and industry insights.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5">
          <h3 className="text-sm font-semibold">Our Vision</h3>
          <p className="mt-2 text-slate-300">
            We strive for the betterment of society through technology.
          </p>
        </div>
      </div>
      <FAQ />
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "What is DSC?",
      a: "A student community supported by Google Developers to grow peer-to-peer learning and build real projects.",
    },
    {
      q: "How is DSC different?",
      a: "We emphasise hands-on learning through workshops, hacknights and open-source projects with impact.",
    },
    {
      q: "How did we start?",
      a: "We began as a small group of builders that wanted a welcoming space to learn modern dev tools together.",
    },
  ];
  return (
    <div className="mt-4 space-y-3">
      {items.map((it, i) => (
        <Accordion key={i} title={it.q}>
          <p className="text-slate-300">{it.a}</p>
        </Accordion>
      ))}
    </div>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between bg-slate-900 px-5 py-4 text-left text-white"
      >
        <span className="font-semibold">{title}</span>
        <span
          className={`transition-transform ${open ? "rotate-90" : "rotate-0"}`}
        >
          ▶
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden bg-slate-950/40 px-5 pb-5 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}

function Community() {
  const imgs = [
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529336953121-a9bf0127c2fc?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
  ];
  return (
    <section id="community" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Our Community In Action</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {imgs.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            <img
              className="h-60 w-full object-cover"
              src={src}
              alt="Community"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Events() {
  const upcoming = [
    {
      title: "Intro to React + TypeScript",
      date: "Nov 12, 2025",
      where: "COM2 LT",
      tag: "Workshop",
    },
    {
      title: "Hacknight: #TechForGood",
      date: "Nov 19, 2025",
      where: "The Hangar",
      tag: "Hacknight",
    },
    {
      title: "Cloud Study Jam (GCP)",
      date: "Nov 26, 2025",
      where: "Online",
      tag: "Study Jam",
    },
  ];
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Upcoming Events</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {upcoming.map((e, i) => (
          <article
            key={i}
            className="grid gap-2 rounded-2xl border border-slate-200 bg-slate-900 p-5"
          >
            <span className="text-xs font-bold tracking-wide text-indigo-300">
              {e.tag}
            </span>
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="text-slate-300">
              {e.date} • {e.where}
            </p>
            <a
              href="#join"
              className="mt-1 inline-flex w-fit items-center rounded-full bg-emerald-300 px-4 py-2 font-semibold text-slate-900 hover:bg-emerald-200"
            >
              Register
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-slate-200 px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3">
          <GdscDots />
          <div>
            <div className="font-semibold">GDSC NUS</div>
            <div className="text-xs text-slate-500">#TECHFORGOOD</div>
          </div>
        </div>
        <small className="text-slate-400">
          © {new Date().getFullYear()} GDSC NUS • Built with React + Vite
        </small>
      </div>
    </footer>
  );
}

function GdscDots() {
  const Dot = ({ c }: { c: string }) => (
    <span
      className="inline-block h-2.5 w-2.5 rounded-sm"
      style={{ background: c }}
    />
  );
  return (
    <span className="inline-flex items-center gap-1.5">
      <Dot c="#34a853" />
      <Dot c="#4285f4" />
      <Dot c="#fbbc05" />
      <Dot c="#ea4335" />
    </span>
  );
}
