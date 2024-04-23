import FeaturedCourses from "@/Components/FeaturedCourses";
import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen  antialiased">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
