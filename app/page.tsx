import { NavigationBar } from "@/components/feature/navigation-bar";

export default function Home() {
  return (
    // Body
    <div className="flex flex-col flex-1 items-center justify-center bg-[#05050d] font-inter">
      {/* Navigation Bar */}
      <NavigationBar />
      {/* Main Content */}
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#05050d] sm:items-start">
      </main>
    </div>
  );
}
