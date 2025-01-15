import { CheckCircle2 } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Features = () => {
  const features = [
    {
      title: "Smart Career Matching",
      description: "Our AI analyzes your profile to match you with the perfect career opportunities.",
    },
    {
      title: "Skill Development",
      description: "Get personalized recommendations for skills you need to succeed in your chosen career.",
    },
    {
      title: "Industry Insights",
      description: "Stay updated with the latest trends and demands in your field of interest.",
    },
    {
      title: "Expert Guidance",
      description: "Access AI-powered mentorship and guidance for your career journey.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">CareerAI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered platform can transform your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;