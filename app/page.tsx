import { NavigationBar } from "@/components/feature/navigation-bar";
import { Jumbotron } from "@/components/feature/jumbotron";
import {AboutMe} from "@/components/feature/about-me";

export default function Home() {
  return (
    // Body
    <div className="flex flex-col flex-1 items-center justify-center bg-[#05050d] font-inter relative">
      {/* Navigation Bar */}
      <NavigationBar />
      {/* Main Content */}
      <main className="flex flex-1 w flex-col items-center justify-between w-full h-full  bg-[#bfbfdf] sm:items-start">
      {/* Jumbotron Section */}
      <Jumbotron />
      {/* About Me Section */}
      <AboutMe />
      </main>
    </div>
  );
}
