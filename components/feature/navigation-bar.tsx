"use client";

import Image from "next/image";
import Link from "next/link";
import {} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationBar() {
  return (
    <NavigationMenu className="bg-none absolute top-0 right-0 z-50">
      {/* Menu List */}
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#">Home</Link>}
          />
        </NavigationMenuItem>
        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#">About</Link>}
          />
        </NavigationMenuItem>
        {/* Skills */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#">Skills</Link>}
          />
        </NavigationMenuItem>
        {/* Projects */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#">Projects</Link>}
          />
        </NavigationMenuItem>
        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="#">Contact</Link>}
          />
        </NavigationMenuItem>
        {/* Sharinggan Icon */}
        <NavigationMenuItem>
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
