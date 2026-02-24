"use client"
import { useEffect, useRef } from "react";

export default function Hero() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2; // Adjust speed (0.5 = half speed, 2 = double speed)
    }
  }, []);

  return (
    <section className="relative w-dvw min-h-dvh flex items-center justify-center bg-gray-800 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/hero_bg.mp4"
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Blackish Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl text-primary font-extrabold font-barlow">
          SANSKRITI-&apos;25
        </h1>
        <h4 className="px-8 py-2 text-base sm:text-xl md:text-2xl font-normal font-barlow text-secondary bg-black">
          🦋ഇത് കലൈ സൊല്ലും കഥൈ🦋
        </h4>
        <p className="font-courier font-normal text-xs sm:text-sm md:text-base text-secondary">
          March 6, 7, 8 2025 | MACE, Kothamangalam
        </p>
      </div>
    </section>
  );
}
