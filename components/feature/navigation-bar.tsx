"use client";

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
  return (
    <NavigationMenu
      className="rounded-none absolute top-0 right-0 z-50 text-white my-4 px-11 pb-5 bg-transparent border-b-2 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.2px]"
    >
      {/* Menu List */}
      <NavigationMenuList className="flex items-center justify-between gap-4">
        {/* Uchiha Clan & Katakana Name Icon */}
        <NavigationMenuItem className="flex items-center justify-center">
          <Image
            src="/assets/Uchiha-Clan.png"
            alt="Next.js logo"
            width={45}
            height={45}
            className="bg-[#05050d]"
            priority
          />
          <Image
            src="/assets/Katakana-Name.png"
            alt="Next.js logo"
            width={100}
            height={45}
            className="bg-[#05050d]"
            priority
          />
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center justify-center gap-11">
          <NavigationMenuLink render={<Link href="#">Home</Link>} />
          <NavigationMenuLink render={<Link href="#">About</Link>} />
          <NavigationMenuLink render={<Link href="#">Skills</Link>} />
          <NavigationMenuLink render={<Link href="#">Projects</Link>} />
          <NavigationMenuLink render={<Link href="#">Contact</Link>} />
          {/* Sharinggan Icon */}
          <Image
            src="/assets/Sharinggan-Image.png"
            alt="Next.js logo"
            width={45}
            height={45}
            className="bg-[#05050d]"
            priority
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
