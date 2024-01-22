import About from "@/components/About";
import Advantage from "@/components/Advantage";
import CTA from "@/components/CTA";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner";
import Testimonial from "@/components/Testimonial";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Partner />
      <Advantage />
      <Testimonial />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
