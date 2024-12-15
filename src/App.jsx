import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import JoinTheTeam from "./pages/joinTheTeam/JoinTheTeam";
import Loading from "./pages/loading/Loading";
import Events from "./pages/events/Events";
import ScientificDayForm from "./pages/events/scientificDayForm";
import End from "./pages/events/End";
import { useSelector } from "react-redux"
import AOS from "aos";

function App() {
  const theme = useSelector((state) => state.themeSlice.theme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false, 
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading theme={theme} />
      ) : (
        <section className={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/joinTheTeam" element={<JoinTheTeam />} />
            <Route path="/events" element={<Events />} />
            <Route path="/scientificDayForm" element={<End />} />
          </Routes>
        </section>
      )}
    </BrowserRouter>
  );
}

export default App;