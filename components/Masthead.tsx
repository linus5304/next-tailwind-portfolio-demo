import React from "react";
import Image from "next/image";

interface MastheadProps {}

export const Masthead: React.FC<MastheadProps> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source
          src="/assets/masthed-bg.m4v"
          type="video/mp4; codec=hvc1"
        ></source>
        <source
          src="/assets/masthed-bg.m4v"
          type="video/webm; codecx=vp9"
        ></source>
      </video>
    <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}></div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>App Development, </span>
          <span>done right.</span>
        </h2>
      </div>
    </div>
  );
};
