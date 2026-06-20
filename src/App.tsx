import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import TeamPage from "./pages/TeamPage";
import Hack4GoodPage from "./pages/Hack4GoodPage";
import Hack4GoodWinnersPage from "./pages/Hack4GoodWinnersPage";
import PastEventDetailPage from "./pages/PastEventDetailPage";
import EventDetailPage from "./pages/EventDetailPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<HomePage />} />

      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/hack4good" element={<Hack4GoodPage />} />
      <Route path="/events/hack4good/winners" element={<Hack4GoodWinnersPage />} />
      <Route path="/events/:year" element={<PastEventDetailPage />} />
      <Route path="/events/:year/:slug" element={<EventDetailPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      <Route path="/team" element={<TeamPage />} />

        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </>
  );
}
