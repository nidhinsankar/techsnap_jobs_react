import React from "react";
import AppBar from "./components/ui/AppBar";
import "./style.css";
import "./jobs.css";
import HeroSection from "./components/ui/HeroSection";
import JobsList from "./components/ui/JobsList";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <>
      <AppBar />
      <HeroSection />
      <JobsList />
      <Footer />
    </>
  );
};

export default App;
