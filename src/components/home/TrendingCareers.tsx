import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "../ui/GlassCard";
import AnimatedButton from "../ui/AnimatedButton";

const TrendingCareers = () => {
  const careers = [
    {
      title: "AI Engineer",
      description: "Design and implement artificial intelligence solutions",
      growth: "+45%",
      salary: "$150,000",
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to drive business decisions",
      growth: "+35%",
      salary: "$130,000",
    },
    {
      title: "Cloud Architect",
      description: "Design and oversee cloud computing strategies",
      growth: "+40%",
      salary: "$160,000",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trending Career Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the most in-demand careers shaping the future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <GlassCard
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{career.title}</h3>
                    <p className="text-gray-600">{career.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-500">Growth</p>
                      <p className="font-semibold text-green-500">{career.growth}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Avg. Salary</p>
                      <p className="font-semibold">{career.salary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedButton asChild>
            <Link to="/careers" className="group">
              Explore All Careers
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default TrendingCareers;