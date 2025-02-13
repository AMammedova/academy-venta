import React from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Courses from "./components/Courses";
import dynamic from "next/dynamic";
import Contact from "@/shared/components/Contact";
import { Dictionary } from "@/shared/types/Dictionary";
import TutorsPage from "../tutors/Tutors";
import FAQ from "@/shared/components/FAQ";

const Testimonial = dynamic(() => import("./components/Testimonial"), {
  ssr: false,
});

const Landing = ({ dict }: Dictionary) => {
  return (
    <div>
      <Hero t={dict?.hero ?? {}} />
      <Feature t={dict?.feature ?? {}} />
      <Courses t={dict?.courses ?? {}} />
      <TutorsPage t={dict?.tutorsPage ?? {}} />
      <Testimonial t={dict?.testimonial ?? {}} />
      <Contact t={dict?.contact ?? {}} />
      <FAQ t={dict?.faq ?? {}} />
    </div>
  );
};

export default Landing;
