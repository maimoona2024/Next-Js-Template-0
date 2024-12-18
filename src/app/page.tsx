"use client"
import Hero from "@/components/Hero";
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    aos.refresh();
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
}
