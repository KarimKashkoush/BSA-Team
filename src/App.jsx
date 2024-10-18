import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import JoinTheTeam from "./pages/joinTheTeam/JoinTheTeam";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/joinTheTeam" element={<JoinTheTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
