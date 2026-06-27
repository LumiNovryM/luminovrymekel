"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SharinganButton() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleHover = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <>
      <Button
        onClick={handleHover}
        className="group max-w-48 mt-6 px-4 py-[1.3rem] border-2 hover:bg-[#0c0a1b] bg-[#05040c] border-[#351d4f] text-[#b48fd5] flex items-center justify-between gap-2"
      >
        View My Work
        <Image
          className="transition-transform duration-500 ease-in-out group-hover:rotate-360"
          src="/assets/Sharinggan-Image.png"
          alt="Sharingan Icon"
          width={35}
          height={35}
          priority
        />
      </Button>

      <audio
        ref={audioRef}
        src="assets/sound/sharinggan-effect.mp3"
        preload="auto"
      />
    </>
  );
}
