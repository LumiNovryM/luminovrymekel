"use client";


import SharinganButton from "@/components/ui/button-sharinggan";
import bg from "../../public/assets/Jumbotron-BG.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Jumbotron() {

  return (
    <div
      className="text-white py-24 px-52 w-full h-screen relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Image
        src="/assets/Jumbotron-Name.png"
        alt="Lumi Novri Meckel"
        width={400}
        height={45}
        priority
      />
      <p className="text-[#761dc2] tracking-widest text-2xl">
        FULLSTACK DEVELOPER
      </p>
      <p className="text-lg mt-6 w-125 text-[#aeacb9]">
        I build modern and scalable web applications with clean and sharp focus.
      </p>
      {/* Sharinggan Button */}
      <SharinganButton />
      {/* List Icon */}
      <NavigationMenu className="mt-8">
        {/* Menu List */}
        <NavigationMenuList className="flex items-center justify-between gap-4">
          <NavigationMenuItem className="flex items-center justify-center gap-11">
            <Button size="icon" aria-label="Submit" className="bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#7a778a"
                style={{
                  opacity: "1",
                  width: "30px",
                  height: "30px",
                }}
              >
                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436c.55.096.756-.233.756-.522c0-.262-.013-1.128-.013-2.049c-2.764.509-3.479-.674-3.699-1.292c-.124-.317-.66-1.293-1.127-1.554c-.385-.207-.936-.715-.014-.729c.866-.014 1.485.797 1.691 1.128c.99 1.663 2.571 1.196 3.204.907c.096-.715.385-1.196.701-1.471c-2.448-.275-5.005-1.224-5.005-5.432c0-1.196.426-2.186 1.128-2.956c-.111-.275-.496-1.402.11-2.915c0 0 .921-.288 3.024 1.128a10.2 10.2 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371c2.104-1.43 3.025-1.128 3.025-1.128c.605 1.513.221 2.64.111 2.915c.701.77 1.127 1.747 1.127 2.956c0 4.222-2.571 5.157-5.019 5.432c.399.344.743 1.004.743 2.035c0 1.471-.014 2.654-.014 3.025c0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11" />
              </svg>
            </Button>
            <Button size="icon" aria-label="Submit" className="bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#7a778a"
                style={{
                  opacity: "1",
                  width: "30px",
                  height: "30px",
                }}
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096a1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277c-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387c2.704 0 3.203 1.778 3.203 4.092v4.71z" />
              </svg>
            </Button>
            <Button size="icon" aria-label="Submit" className="bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#7a778a"
                style={{
                  opacity: "1",
                  width: "30px",
                  height: "30px",
                }}
              >
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z" />
              </svg>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Image
        className="absolute left-10 top-85"
        src="/assets/Katakana-Left.png"
        alt="Lumi Novri Meckel"
        width={80}
        height={80}
        priority
      />
      <Image
        className="absolute right-5 top-28"
        src="/assets/Katakana-Right.png"
        alt="Lumi Novri Meckel"
        width={60}
        height={60}
        priority
      />
    </div>
  );
}
