"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Relaxing Music",
    link: "/music",
    thumbnail: "/images/music.jpg",
  },
  {
    title: "Guided Meditation",
    link: "/meditation",
    thumbnail: "/images/meditation.jpg",
  },
  {
    title: "Breathing Exercises",
    link: "/breathing",
    thumbnail: "/images/breathing.jpg",
  },
  {
    title: "Stress Relief Yoga",
    link: "/yoga",
    thumbnail: "/images/yoga.jpg",
  },
  {
    title: "Therapy Sessions",
    link: "/therapy",
    thumbnail: "/images/therapy.jpg",
  },
  {
    title: "Mindfulness Activities",
    link: "/mindfulness",
    thumbnail: "/images/mindful.jpg",
  },
  {
    title: "Healthy Recipes",
    link: "/recipes",
    thumbnail: "/images/recepies.jpg",
  },
  {
    title: "Daily Motivation",
    link: "/motivation",
    thumbnail: "/images/dailymotivation.jpg",
  },
  {
    title: "Fitness Tips",
    link: "/fitness",
    thumbnail: "/images/fitnesstip.jpg",
  },
  {
    title: "Sleep Better",
    link: "/sleep",
    thumbnail: "/images/sleep.jpg",
  },
  {
    title: "Wellness Webinars",
    link: "/webinars",
    thumbnail: "/images/webinars.jpg",
  },
  {
    title: "Stress Tests",
    link: "/tests",
    thumbnail: "/images/stresstest.jpg",
  },
  {
    title: "Spiritual Connections",
    link: "/experts",
    thumbnail: "/images/spritual.jpg"
 } ,
 {
  title: "Stress Relief Yoga",
  link: "/yoga",
  thumbnail: "/images/yoga.jpg",
},
{
  title: "Healthy Recipes",
  link: "/recipes",
  thumbnail: "/images/recepies.jpg",
},
];