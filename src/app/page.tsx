import AboutSection from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/herosection";
import MatrixBackground from "@/components/MatrixBackground";

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen w-full">
      <div className="z-1">
        <Header />
        <HeroSection />
        <AboutSection />
        <Footer />
      </div>

      <div className=" absolute inset-0 opacity-20 -z-10 pointer-events-none">
        <MatrixBackground />
      </div>
    </div>
  );
}
