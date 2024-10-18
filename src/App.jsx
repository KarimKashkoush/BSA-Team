import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import JoinTheTeam from "./pages/joinTheTeam/JoinTheTeam";
import Loading from "./pages/loading/Loading"; 
function App() {
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <BrowserRouter>
      {loading ? ( 
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/joinTheTeam" element={<JoinTheTeam />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;