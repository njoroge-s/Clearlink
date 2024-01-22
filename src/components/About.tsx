"use client";
import faqs from "@/data/faq";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./ui/FAQ";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="container  flex flex-col md:flex-row gap-20 justify-between items-center">
      <div className="flex flex-col gap-4 md:w-3/6">
        <span className="font-semibold text-blue">Support</span>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">
          FAQs
        </h2>
        <p className="text-gray-500  max-w-md text-lg">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please
          <span className="underline"> chat to our friendly team</span>.
        </p>
      </div>
      <div className="md:w-4/6" data-aos="fade-up">
        {faqs.map((faq) => (
          <FAQ key={faq.id} question={faq.que} answer={faq.ans} />
        ))}
      </div>
    </section>
  );
};

export default About;
