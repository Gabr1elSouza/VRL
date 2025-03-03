import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuemSomos from "./components/QuemSomos";
import Servicos from "./components/Servicos";

function App() {
  return (
    <div className="bg-blue-800 scroll-smooth">
      <Header />
      <QuemSomos />
      <Servicos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
