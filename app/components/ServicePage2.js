"use client";
import React from "react";
import Image from "next/image";

import unreal from "@/public/serviceimages/unreal.jpg";
import comp from "@/public/serviceimages/comp.jpg";
import fx from "@/public/serviceimages/fx.jpg";
import ai from "@/public/serviceimages/ai.png";
import cleanup from "@/public/serviceimages/cleanup.jpg";
import chroma from "@/public/serviceimages/chroma.png";
import roto from "@/public/serviceimages/roto.png";
import track from "@/public/serviceimages/track.jpg";
import screen from "@/public/serviceimages/screen.png";
import './servicepage.css'

const services = [
  {
    title: "Unreal Engine Visuals",
    desc: "Dark cinematic environment set with clean lighting, showing a 3D scene viewport aesthetic, calm, real-time rendering mood, minimal UI feel, high-quality visuals.",
    img: unreal,
  },
  {
    title: "Compositing",
    desc: "Split frame showing raw footage turning into a clean composite, soft light focus on merge line, realistic, neat, natural integration feel.",
    img: comp,
  },
  {
    title: "FX Simulation",
    desc: "Smoke, sparks & particles simulation — realistic cinematic effects with physical motion dynamics, perfect for VFX shots.",
    img: fx,
  },
  {
    title: "2D & 3D Tracking",
    desc: "Motion tracking points or 3D camera track overlay in a minimal, clean layout on a dark studio render background, realistic solve setup style.",
    img: track,
  },
  {
    title: "Rotoscoping",
    desc: "Subject outline/matte overlay on footage, clean edge detailing, slight soft rim light, neat professional roto look.",
    img: roto,
  },
  {
    title: "Paint & Cleanup",
    desc: "Marked area being cleanly painted out on a dark frame, healing/patch style representation, minimal, honest cleanup metaphor.",
    img: cleanup,
  },
  {
    title: "Screen Replacement",
    desc: "Phone/LED/laptop screen replaced with clean track overlay, soft light reflection integration, neat realistic placement.",
    img: screen,
  },
  {
    title: "Chroma/Keying",
    desc: "Green screen key edge isolated in a dark studio frame, slight spill control aesthetic, clean matte extraction feel, realistic not exaggerated.",
    img: chroma,
  },
  {
    title: "AI Video",
    desc: "Minimal generative frame representing AI-assisted video creation — subtle futuristic media vibe, soft light beam or neural network lines, clean concept style.",
    img: ai,
  },
];

const ServicePage = () => {
  return (
    <section className="service-container">
      
      {/* Heading Section */}
      <div className="service-header">
        <h1>Services</h1>
        <p>Professional visual effects and post-production services</p>
        <span className="underline"></span>
      </div>

      {/* Service Blocks */}
      {services.map((item, index) => (
        <div
          className={`service-block ${
            index % 2 === 0 ? "normal-row" : "reverse-row"
          }`}
          key={index}
        >
          {/* IMAGE */}
          <div className="service-img">
            <Image src={item.img} alt={item.title} className="image-box" />
          </div>

          {/* TEXT */}
          <div className="service-text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicePage;
