import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Meet The Team</h1>
        <p className="mt-4 text-slate-600">Coming soon!</p>
      </main>
      <Footer />
    </div>
  );
}