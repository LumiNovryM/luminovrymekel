"use client";

import bg from "../../public/assets/Aboutme-BG.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutMe() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/document/CV_ATS_LumiNovriMeckel.pdf";
    link.download = "CV_ATS_LumiNovriMeckel.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="about"
      className="text-white py-24 px-64 w-full h-screen relative -top-20 flex items-center justify-center gap-20"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="image ">
        <Image
          src="/assets/Sasuke-Image.png"
          alt="Lumi Novri Meckel"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className="aboutme">
        <p className="text-[#761dc2] text-xl my-4 flex items-center gap-2 font-medium">
          {" "}
          <Image
            className="transition-transform duration-500 ease-in-out hover:rotate-360"
            src="/assets/Sharinggan-Image.png"
            alt="Sharingan Icon"
            width={28}
            height={28}
            priority
          />
          ABOUT ME
        </p>
        <p className="text-2xl font-bold">
          I walk my <span className="text-[#761dc2]">own path.</span>
        </p>
        <p className="my-4 text-[#908ea1]">
          Fullstack Developer with 3+ years of experience building web
          applications. I love turning ideas into real products with efficient
          code and great user experience.
        </p>
        <div className="details flex items-center justify-between gap-8 text-[11px]">
          <div className="details-item-1">
            <div className="flex items-center gap-[0.8rem] border-b-2 border-b-[#0d0d17] pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#875bcc"
                style={{ opacity: 1 }}
              >
                <path
                  d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                />
              </svg>
              <div className="name font-medium ">
                <span className="text-[#761dc2]">Name</span>
                <br />
                <span className="">Lumi Novri Meckel</span>
              </div>
            </div>
            <div className="flex items-center gap-[0.8rem] pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                width="24"
                height="24"
                fill="#875bcc"
                style={{ opacity: 1 }}
              >
                <path d="M13.14 11.949a.25.25 0 0 1-.302 0L6.183 6.83c-.358-.275-.155-.83.303-.83h13.028c.459 0 .661.555.303.83zM22 9.491v9.527c0 .54-.473.982-1.05.982H5.05C4.473 20 4 19.558 4 19.018V9.49c0-.413.515-.638.85-.383l7.982 5.971a.3.3 0 0 0 .336 0l7.981-5.971c.336-.255.851-.03.851.383" />
              </svg>
              <div className="name font-medium">
                <span className="text-[#761dc2]">Email</span>
                <br />
                <span className="">luminovrymekel@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="details-item-2">
            <div className="flex items-center gap-[0.8rem] border-b-2 border-b-[#0d0d17] pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24"
                height="24"
                fill="#875bcc"
                style={{ opacity: 1 }}
              >
                <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64" />
              </svg>
              <div className="name font-medium">
                <span className="text-[#761dc2]">Location</span>
                <br />
                <span className="">Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="flex items-center gap-[0.8rem] pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#875bcc"
                style={{ opacity: 1 }}
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4 11h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2" />
              </svg>
              <div className="name font-medium">
                <span className="text-[#761dc2]">Availability</span>
                <br />
                <span className="">Open to work immediately</span>
              </div>
            </div>
          </div>
        </div>
        <Button onClick={downloadCV} className="group max-w-48 mt-6 px-4 py-[1.3rem] border-2 hover:bg-[#0c0a1b] bg-[#05040c] border-[#351d4f] text-[#b48fd5] flex items-center justify-between gap-2">
          Download CV
          <Image
            src="/assets/Fire-Chakra.png"
            alt="Sharingan Icon"
            width={35}
            height={35}
            priority
          />
        </Button>
      </div>
    </div>
  );
}
