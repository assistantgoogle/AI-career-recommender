import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedButton from "../ui/AnimatedButton";
import GlassCard from "../ui/GlassCard";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">Discover Your Dream Career</span>
            <br />
            <span>Powered by AI</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Let our advanced AI guide you to the perfect career path based on your skills,
            interests, and aspirations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton asChild size="lg">
              <Link to="/upload" className="group">
                Get Started
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedButton>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">
              Get personalized career recommendations based on cutting-edge AI analysis.
            </p>
          </GlassCard>

          <GlassCard className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold mb-2">Skill Analysis</h3>
            <p className="text-gray-600">
              Understand your strengths and areas for growth with detailed skill assessments.
            </p>
          </GlassCard>

          <GlassCard className="animate-fade-up" style={{ animationDelay: "600ms" }}>
            <h3 className="text-xl font-semibold mb-2">Career Roadmap</h3>
            <p className="text-gray-600">
              Get a clear path to your dream career with actionable steps and milestones.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;