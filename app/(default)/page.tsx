"use client";

import Video from "@/components/video";
import Hero from "@/components/hero-home";
import Features from "@/components/features";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import {useEffect} from "react";
import AdvCourse from "@/components/adv-course";
import PricingSlider from "@/components/pricing-slider";

export default function Home() {
  useEffect(() => {
    // Remove the toast notification
    const wrapper = document.querySelectorAll('.nextjs-static-indicator-toast-wrapper')
    wrapper.forEach((el) => {
      el.classList.add('hidden')
      el.remove()
    })
  }, []);

  return (
    <>
      <Hero/>
      <Features/>
      <Video/>
      <Cta/>
      <LargeTestimonial/>
      <AdvCourse/>
      <PricingSlider/>
    </>
  );
}
