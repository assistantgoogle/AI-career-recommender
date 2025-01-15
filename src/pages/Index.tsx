import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import TrendingCareers from "@/components/home/TrendingCareers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TrendingCareers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;