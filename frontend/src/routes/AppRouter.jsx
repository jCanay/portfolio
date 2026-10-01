import { Routes, Route } from "react-router";
import Homepage from "../pages/home/HomePage";
import ProjectPage from "../pages/project/ProjectPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  );
}
