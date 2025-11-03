
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<HomePage />} />

      <Route path="/events" element={<EventsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/team" element={<TeamPage />} />

      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  );
}