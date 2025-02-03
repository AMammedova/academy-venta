import React from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Courses from "./components/Courses";
// import Testimonial from './components/Testimonial'
import dynamic from "next/dynamic";
import Contact from "@/shared/components/Contact";

const Testimonial = dynamic(() => import("./components/Testimonial"), {
  ssr: false, // Server tərəfində render etmə
});

const Landing = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Courses />

      <Testimonial />
      <Contact/>
    </div>
  );
};

export default Landing;
