import React, { useRef } from "react";
import Logo from "../../Images/Logo.jpg"

const LandingPage: React.FC = () => {
  const aboutSectionRef = useRef(null);
  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gray-900 text-white  min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-800 shadow-md">
        <h1 className="text-yellow-400 text-2xl font-bold">AICB</h1>
     
        <div className="space-x-4">
          <a href="/signup" className="bg-orange-500 text-white px-4 py-2 rounded-md">Sign up</a>
          <a href="/login" className="bg-yellow-400 text-white px-4 py-2 rounded-md">Sign in</a>
        </div>
      </nav>

<div className="flex items-center justify-center mt-20">
      {/* Hero Section */}
      <section className="text-center py-20 px-5 w-screen h-[100%] mb-10">
        <h2 className="text-6xl font-bold mb-4">AI-Powered Circuit Design</h2>
        <p className="text-6xl font-semibold text-blue-400 inline">Smarter,</p>
        <p className="text-6xl font-semibold text-yellow-400 inline"> Faster,</p>
        <p className="text-6xl font-semibold text-green-400 inline"> Effortless!</p>
        <p className="max-w-6xl text-xl mx-auto mt-4 text-gray-300">
          Tired of complex circuit design? Meet our AI Circuit Builder—your intelligent
          assistant for effortless electronic circuit creation. Drag, drop, and let AI optimize
          your design in real-time. Whether you're a beginner or a pro, experience the future
          of circuit building today!
        </p>
        <div className="mt-6 space-x-4">
          <a href="/home" className="bg-red-500 px-6 py-3 rounded-md">Generate Circuit</a>
        </div>
      </section>
      </div>
      {/* About Section */}
      <section ref={aboutSectionRef}  className="bg-gray-800 py-20 px-5">
        <h3 className="text-center text-3xl font-bold mb-10">About</h3>
        <div className="max-w-5xl mx-auto ml-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <div>
              <h4 className="font-bold">Smart Circuit Design</h4>
              <p className="text-gray-300">Generate, edit, and enhance circuits with AI-powered suggestions.</p>
            </div>
            <div>
              <h4 className="font-bold">Component Insights & Purchase Links</h4>
              <p className="text-gray-300">Click any component to view details and buy from custom links.</p>
            </div>
            <div>
              <h4 className="font-bold">Real-Time Suggestions</h4>
              <p className="text-gray-300">Get AI-driven recommendations to improve circuit efficiency.</p>
            </div>
            <div>
              <h4 className="font-bold">One-Click Export</h4>
              <p className="text-gray-300">Save circuits in PNG, JPEG, PDF, or SVG formats.</p>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 ml-40 ">
            <img 
      src={Logo}
              alt="Circuit Design"
              className="rounded-lg w-99 shadow-lg "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
