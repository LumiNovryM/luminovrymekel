"use client";

import bg from "../../public/assets/Skills-BG.png";
import Image from "next/image";

const tags = ["Next.js", "React", "Tailwind", "Java", "Spring Boot", "Docker"];

export function Skills() {
  return (
    <div
      id="about"
      className="text-white py-24 px-64 w-full h-screen relative flex items-center justify-evenly flex-col -top-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <p className="text-[#761dc2] text-[16px] my-4 flex items-center gap-2 font-bold">
        {" "}
        <Image
          className="transition-transform duration-500 ease-in-out hover:rotate-360"
          src="/assets/Sharinggan-Image.png"
          alt="Sharingan Icon"
          width={28}
          height={28}
          priority
        />
        SKILLS
      </p>

      {/* Skill List 1 */}
      <div className="mx-auto w-240 overflow-hidden">
        <div className="">
          <div className=" flex w-max gap-4 p-1.5">
            {[...tags, ...tags].map((tag, index) => (
              <div
                key={index}
                className="shrink-0 rounded-lg bg-[rgba(10,10,20,0.53)]
  shadow-[0_4px_30px_rgba(0,0,0,0.1)]
  backdrop-blur-[14.5px]
  border
  border-[rgba(10,10,20,0.27)] px-3 py-2.5 text-sm flex items-center justify-center flex-col"
              >
                <p className="text-[#761dc2] font-bold">{tag}</p>

                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute h-14 w-14 rounded-full bg-linear-to-r from-cyan-400 via-violet-500 to-fuchsia-500 blur-2xl opacity-40" />

                  <Image
                    className="relative z-10"
                    src="/assets/skills-icon/vuejs.png"
                    alt="Vue"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Skill List 2 */}
      {/* Skill List 3 */}
    </div>
  );
}
