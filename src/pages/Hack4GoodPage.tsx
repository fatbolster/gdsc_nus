import { NavLink } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import DontMissOutSection from "../components/DontMissOutSection";

export default function Hack4GoodPage() {
  const opportunities = [
    {
      title: "Real Impact",
      description: "Tackle real challenges faced by underserved communities and make a tangible difference",
      image: "/events/realimpact.png",
      // Google Red
      className: "hover:border-red-200 hover:shadow-red-50",
    },
    {
      title: "Expert Mentors",
      description: "Learn from experienced mentors from Google, Grab, and other tech companies",
      image: "/events/expertmentors.png",
      // Google Blue
      className: "hover:border-blue-200 hover:shadow-blue-50",
    },
    {
      title: "Win Prizes",
      description: "Win prizes and mentorship opportunities",
      image: "/events/winprizes.png",
      // Google Yellow
      className: "hover:border-yellow-200 hover:shadow-yellow-50",
    },
    {
      title: "Collaborate",
      description: "Collaborate with like-minded changemakers",
      image: "/events/collaborate.png",
      // Google Green
      className: "hover:border-green-200 hover:shadow-green-50",
    },
    {
      title: "Build Portfolio",
      description: "Build your portfolio with purpose-driven projects",
      image: "/events/portfolio.png",
      // Google Blue (Cycling back)
      className: "hover:border-blue-200 hover:shadow-blue-50",
    },
  ];

  return (
    <div className="min-h-dvh overflow-x-hidden bg-white text-slate-900 selection:bg-blue-500/20">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 md:py-16">
        {/* Back Link */}
        <div className="mb-10">
          <NavLink
            to="/events"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to All Events
          </NavLink>
        </div>

        {/* Hero Section with Sidebar Content moved here */}
        <div className="grid gap-12 lg:grid-cols-2 items-start mb-20 md:mb-24">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                <span className="block text-slate-900">Hack4Good</span>
                <span className="block bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  Hackathon
                </span>
              </h1>
              {/* Google Brand Abstract Blobs */}
              <div className="absolute -z-10 -top-20 -right-20 h-64 w-64 rounded-full bg-blue-50 blur-3xl opacity-60" />
              <div className="absolute -z-10 top-20 -left-20 h-40 w-40 rounded-full bg-red-50 blur-3xl opacity-60" />
            </div>
            <p className="max-w-xl text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Join Developer Group @ NUS Computing's premier social impact hackathon.
              Code for a cause, innovate for good, and build a better future.
            </p>

            {/* CTA Box - moved from sidebar */}
            <div className="mt-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 max-w-md">
              <p className="text-slate-700 font-medium mb-1">
                Ready to make a difference?
              </p>
              <p className="text-sm text-slate-500">
                Whether you're a seasoned pro or a beginner, there's a place for you at Hack4Good.
              </p>
            </div>
          </div>

          {/* Hall of Fame / Previous Winners Image - moved here next to Heading */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl aspect-[4/3] relative isolate">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-br from-blue-500 to-yellow-500" />
              <img
                src="/events/rightpicture.png"
                alt="Previous Winners"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">Hall of Fame</h3>
                <p className="text-slate-200 text-sm mb-6">Check out the incredible solutions from our previous cohorts.</p>
                <NavLink
                  to="/events/hack4good/winners"
                  className="inline-flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/30"
                >
                  View Previous Winners →
                </NavLink>
              </div>
            </div>
            {/* Decorative dots based on google colors */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-pattern-dots opacity-20" />
          </div>
        </div>

        {/* Main Content - Full Width */}
        <div className="space-y-20">
          {/* About Section - Left Aligned */}
          <section className="max-w-4xl text-left">
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-start gap-3">
              <span className="h-8 w-1 rounded-full bg-blue-500" />
              About the Event
            </h2>
            <div className="prose prose-lg text-slate-600 leading-loose">
              <p>
                Hack4Good brings together students, industry mentors, and community partners
                to create technology solutions for real-world social and environmental challenges.
              </p>
              <p>
                Over the course of this hackathon, students develop innovative projects as solutions to real-life challenges experienced by Non-Profit Organizations.
              </p>
            </div>
          </section>

          {/* Opportunities Section - Full Width & Left Aligned */}
          <section className="text-left">
            <h2 className="text-2xl font-bold mb-10 flex items-center justify-start gap-3">
              <span className="h-8 w-1 rounded-full bg-green-500" />
              Why Participate?
            </h2>
            <div className="flex flex-wrap justify-start gap-6">
              {opportunities.map((opp, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm ${opp.className
                    }`}
                >
                  <div className="flex flex-col items-start text-left h-full">
                    {/* Image Container - Bigger */}
                    <div className="h-40 w-full flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-slate-50 border border-slate-100/50">
                      <img src={opp.image} alt="" className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between w-full">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-3">{opp.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{opp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sponsors Section */}
        <SponsorsSection />

        <DontMissOutSection />
      </main>
      <Footer />
    </div>
  );
}

function SponsorsSection() {
  const goldSponsors = [
    {
      name: "SGInnovate",
      logo: "/sponsors/sg_innovate.png",
      description: "SGInnovate plays a central role in Singapore’s deep-tech ecosystem by supporting startups built on strong scientific and engineering foundations. It works closely with researchers, founders, and industry partners to provide access to talent, funding, and global networks, helping promising technologies move from research to real-world deployment.",
    },
    {
      name: "OSCAR Fund (in partnership with Temasek Foundation)",
      isDual: true,
      logos: ["/sponsors/OSCAR.jpg", "/sponsors/Temasek Foundation.jpg"],
      description: "The OSCAR Fund, in partnership with Temasek Foundation, supports initiatives that strengthen communities and develop future-ready capabilities. Their work spans education, technology, and innovation, with a focus on empowering individuals, fostering inclusive growth, and creating sustainable, long-term social impact.",
    },
    {
      name: "Titansoft",
      logo: "/sponsors/Titansoft.png",
      description: "Titansoft is a product-driven software company that designs and builds large-scale, high-traffic digital platforms. Known for its strong engineering culture, Titansoft emphasizes clean code, system reliability, and continuous learning, encouraging engineers to solve complex problems and build products that scale globally.",
    },
  ];

  const bronzeSponsors = [
    {
      name: "Jane Street",
      logo: "/sponsors/jane_street.png",
      // Description removed as per request
    },
  ];

  const SponsorCard = ({ sponsor }: { sponsor: any }) => (
    <div className="flex flex-col items-start text-left">
      <div className="h-32 w-full flex items-center justify-center p-4 bg-white rounded-xl mb-4">
        {sponsor.isDual ? (
          <div className="flex items-center gap-4 h-full">
            {sponsor.logos.map((logo: string, i: number) => (
              <img key={i} src={logo} alt={sponsor.name} className="h-full w-auto max-w-[140px] object-contain" />
            ))}
          </div>
        ) : (
          <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto max-w-[200px] object-contain" />
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{sponsor.name}</h3>
      <p className="text-sm text-slate-600 leading-relaxed max-w-sm">{sponsor.description}</p>
    </div>
  );

  return (
    <section className="mt-24 mb-24">
      <h2 className="text-3xl font-bold text-left mb-16">Our Sponsors</h2>

      {/* Gold Sponsors */}
      <div className="mb-20">
        <h3 className="flex items-center justify-start gap-2 text-xl font-semibold text-amber-500 mb-10">
          <span>🥇</span> Gold Sponsors
        </h3>
        <div className="grid gap-12 md:grid-cols-3">
          {goldSponsors.map((s, i) => (
            <SponsorCard key={i} sponsor={s} />
          ))}
        </div>
      </div>

      {/* Bronze Sponsors */}
      <div>
        <h3 className="flex items-center justify-start gap-2 text-xl font-semibold text-orange-700 mb-10">
          <span>🥉</span> Bronze Sponsor
        </h3>
        <div className="flex justify-start">
          <div className="max-w-md w-full">
            {bronzeSponsors.map((s, i) => (
              <SponsorCard key={i} sponsor={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
