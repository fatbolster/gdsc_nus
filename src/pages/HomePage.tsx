import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-indigo-500/40">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Community />
        <Events />
        <Projects />
        <Timeline />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

/* --------------------------- HERO --------------------------- */
function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-5xl tracking-tight md:text-7xl lg:text-5xl">
            <span className="bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-400 bg-clip-text text-transparent">
              Build. Learn. Connect
            </span>
          </h1>
          <p className="mt-4 text-sm text-slate-600 max-w-lg leading-relaxed md:text-base">
            Welcome to the Google Developer Student Club at the National
            University of Singapore. Join us to learn, build, and grow with a
            passionate community of developers.
          </p>
          <div className="mt-6">
            <NavLink
              to="/events"
              className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Join Upcoming Events
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-3xl w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="© 2025 DG NUS. All rights reserved."
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- ABOUT --------------------------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
        About Us
      </h2>

      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {/* Our Mission */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To cultivate empathetic & passionate learners of technology
                while equipping them with relevant skills and industry insights.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We strive for the betterment of society through technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Left side text + Right side FAQ */}
      <div className="grid gap-8 md:grid-cols-[1fr_1.8fr] items-start">
        <div>
          <h3 className="text-4xl text-slate-900 mb-3 tracking-tight">
            Developer Student Club
          </h3>
          <div className="w-96 h-1.5 bg-slate-900 mb-6" />
          <p className="text-2xl text-slate-900 tracking-[0.15em]">
            #TECHFORGOOD
          </p>
        </div>

        <FAQ />
      </div>
    </section>
  );
}

/* --------------------------- FAQ / ACCORDION --------------------------- */
function FAQ() {
  const items = [
    {
      q: "What is DSC?",
      a: "A student community supported by Google Developers to grow peer-to-peer learning and build real projects.",
      color: "bg-amber-400 hover:bg-amber-500",
    },
    {
      q: "How is DSC different?",
      a: "We emphasise hands-on learning through workshops, hacknights and open-source projects with impact.",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      q: "How did we start?",
      a: "We began as a small group of builders that wanted a welcoming space to learn modern dev tools together.",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <Accordion key={i} title={it.q} color={it.color}>
          <p className="text-slate-700 text-sm leading-relaxed">{it.a}</p>
        </Accordion>
      ))}
    </div>
  );
}

function Accordion({
  title,
  children,
  color,
}: {
  title: string;
  children: React.ReactNode;
  color: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between ${color} px-6 py-4 text-left text-white transition-colors`}
        aria-expanded={open}
      >
        <span className="font-bold text-base">{title}</span>
        <span
          className={`text-2xl font-light transition-transform ${
            open ? "rotate-90" : ""
          }`}
        >
          ›
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-6 py-5 border-x border-b border-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- COMMUNITY --------------------------- */
function Community() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const scrollByOne = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const step = card ? card.clientWidth + 24 : el.clientWidth / 3;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="community" className="relative mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
        Our Community In Action
      </h2>

      <div className="relative mt-8">
        <button
          aria-label="Previous"
          onClick={() => scrollByOne("left")}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur hover:bg-white"
        >
          ←
        </button>
        <button
          aria-label="Next"
          onClick={() => scrollByOne("right")}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur hover:bg-white"
        >
          →
        </button>

        <div
          ref={scrollerRef}
          className="scroll-smooth overflow-x-auto px-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="grid grid-flow-col gap-6 snap-x snap-mandatory auto-cols-[85%] md:[grid-auto-columns:calc((100%-24px*2)/3)]">
            {items.map((it) => (
              <div
                key={it.id}
                data-card
                className="snap-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
              >
                <img src={it.src} alt="Community" className="h-64 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- EVENTS --------------------------- */
function Events() {
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
    <section id="events" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">Upcoming Events</h2>
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
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${colorClasses} shrink-0`}
                  aria-hidden
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
                  <p className="mt-2 text-sm text-slate-600">{e.description}</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#register"
                  className="block w-full rounded-full bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-blue-400"
                >
                  Register Now
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* --------------------------- PROJECTS --------------------------- */
function Projects() {
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
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">Our Projects</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>
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
    </section>
  );
}

/* --------------------------- TIMELINE --------------------------- */
function Timeline() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We start by understanding your needs and goals.",
      icon: "📋",
    },
    {
      title: "Project Scoping & Proposal",
      description:
        "We define the project scope and deliver a detailed proposal.",
      icon: "📝",
    },
    {
      title: "Development Sprints",
      description: "Our team works in agile sprints to build and iterate.",
      icon: "💻",
    },
    {
      title: "Final Showcase & Handover",
      description: "We present the final project and hand over all assets.",
      icon: "🎉",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">
        Partner With Us: Our Timeline
      </h2>
      <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">
        Here's how we work with our partners from idea to launch.
      </p>

      <div className="relative mt-8">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200" />
        <div className="space-y-12">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className="flex flex-col items-start md:flex-row md:items-center"
              >
                <div
                  className={`md:w-1/2 md:px-8 ${
                    isLeft ? "md:pr-8 md:flex md:justify-end" : "md:pl-8"
                  } w-full`}
                >
                  {isLeft && (
                    <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow">
                      <h3 className="font-semibold text-slate-800">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative flex items-center justify-center md:mx-0 mx-auto z-10">
                  <div className="h-0 w-0 md:h-auto md:w-auto" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow">
                    <span className="text-base">{step.icon}</span>
                  </div>
                </div>

                <div
                  className={`md:w-1/2 md:px-8 ${
                    !isLeft ? "md:pl-8 md:flex md:justify-start" : "md:pr-8"
                  } w-full mt-4 md:mt-0`}
                >
                  {!isLeft && (
                    <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow">
                      <h3 className="font-semibold text-slate-800">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS --------------------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "GDSC NUS has been an incredible place to learn and connect. The workshops are top-notch and the community is very supportive.",
      name: "Sarah L.",
      role: "Computer Science, Year 2",
      avatar: "/avatars/sarah.jpg",
    },
    {
      quote:
        "I've gained so many practical skills through the projects here. It's a great bridge between my coursework and the real world.",
      name: "Michael C.",
      role: "Information Systems, Year 3",
      avatar: "/avatars/michael.jpg",
    },
    {
      quote:
        "The networking opportunities are fantastic. I've met people from Google and other amazing tech companies through GDSC events.",
      name: "Emily T.",
      role: "Business Analytics, Year 4",
      avatar: "/avatars/emily.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold text-center">
        What Our Members Say
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <blockquote
            key={i}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-slate-700 shadow-sm"
          >
            <p className="text-sm italic text-slate-600">“{it.quote}”</p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={it.avatar}
                alt={it.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-slate-800">{it.name}</div>
                <div className="text-xs text-slate-500">{it.role}</div>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- PARTNERS --------------------------- */
function Partners() {
  const logos = [
    { src: "/volunteer_switchboard.png", alt: "Volunteer Switchboard" },
    { src: "/siloamxperience.png", alt: "SiloamXperience" },
    { src: "/itsraining.png", alt: "ItsRainingRaincoats" },
    { src: "/caringforlife.png", alt: "Caring for Life" },
    { src: "/actionforsingapore.png", alt: "Action for Singapore Dogs" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 bg-slate-50">
      <h2 className="text-2xl font-semibold text-center">Our Partners</h2>
      <div className="mt-8 flex items-center justify-between gap-6 overflow-x-auto px-4">
        {logos.map((l, i) => (
          <div key={i} className="flex shrink-0 items-center justify-center px-4">
            <img src={l.src} alt={l.alt} className="h-16 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}