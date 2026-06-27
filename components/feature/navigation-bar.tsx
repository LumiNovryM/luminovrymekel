"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavigationBar() {
    const audioRef = useRef<HTMLAudioElement>(null);

  const handleHover = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
  return (
    <NavigationMenu
      className="rounded-none top-0 right-0 left-0 z-50 text-white py-4 px-11 pb-5 bg-transparent border-b-2 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.2px] font-inter font-medium sticky"
    >
      {/* Menu List */}
      <NavigationMenuList className="flex items-center justify-between gap-4">
        {/* Uchiha Clan & Katakana Name Icon */}
        <NavigationMenuItem className="flex items-center justify-center">
          <Image
            src="/assets/Uchiha-Clan.png"
            alt="Uchiha Clan Logo"
            width={45}
            height={45}
            priority
          />
          <Image
            src="/assets/Katakana-Name.png"
            alt="Katakana Name"
            width={100}
            height={45}
            priority
          />
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center justify-center gap-11">
          <NavigationMenuLink className="text-[12px]" render={<Link href="#home">Home</Link>} />
          <NavigationMenuLink className="text-[12px]" render={<Link href="#about">About</Link>} />
          <NavigationMenuLink className="text-[12px]" render={<Link href="#">Skills</Link>} />
          <NavigationMenuLink className="text-[12px]" render={<Link href="#">Projects</Link>} />
          <NavigationMenuLink className="text-[12px]" render={<Link href="#">Contact</Link>} />
          {/* Sharinggan Icon */}
          <Image
            onClick={handleHover}
            className="transition-transform duration-500 ease-in-out hover:rotate-360"
            src="/assets/Sharinggan-Image.png"
            alt="Sharingan Icon"
            width={35}
            height={35}
            priority
          />
          <audio
        ref={audioRef}
        src="assets/sound/sharinggan-effect.mp3"
        preload="auto"
      />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
  );
}
