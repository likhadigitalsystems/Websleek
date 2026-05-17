import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { About } from "./pages/About";
import { CaseStudies } from "./pages/CaseStudies";
import { Contact } from "./pages/Contact";
import { Government } from "./pages/Government";
import { Home } from "./pages/Home";
import { Industries } from "./pages/Industries";
import { ServicePage } from "./pages/ServicePage";
import { Services } from "./pages/Services";
import { Solutions } from "./pages/Solutions";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/government" element={<Government />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
