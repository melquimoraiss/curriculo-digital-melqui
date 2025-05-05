import Footer from "../components/footer";
import Header from "../components/header";
import HeroSection from "../components/herosection";

export default function Home() {
  return (
    <div>
      <div className="border-b-1 border-purple-950 ">
        <Header />
      </div>

      <HeroSection />
      <Footer />
    </div>
  );
}
