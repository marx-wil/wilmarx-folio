import { Route, Routes } from "react-router-dom";
// layout
import MainLayout from "../layout/main";

// pages
import Projects from "../pages/projects";
import Default from "../pages/default";
import About from "../pages/about";
import WorkHistory from "../pages/workHistory";
import Contact from "../pages/contact";

// HOC
const DefaultView = MainLayout(Default);
const AboutView = MainLayout(About);
const ProjectsView = MainLayout(Projects);
const WorkHistoryView = MainLayout(WorkHistory);
const ContactView = MainLayout(Contact);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/projects" element={<ProjectsView />} />
      <Route path="/work-history" element={<WorkHistoryView />} />
      <Route path="/contact" element={<ContactView />} />
    </Routes>
  );
};

export default Router;
