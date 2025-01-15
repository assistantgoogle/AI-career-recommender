import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const Careers = () => {
  const recommendations = [
    {
      title: "AI Engineer",
      description: "Design and implement artificial intelligence solutions",
      matchScore: 95,
      skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow"],
      salary: "$120k - $180k",
    },
    {
      title: "Full Stack Developer",
      description: "Build end-to-end web applications",
      matchScore: 88,
      skills: ["React", "Node.js", "TypeScript", "SQL"],
      salary: "$90k - $140k",
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to drive business decisions",
      matchScore: 82,
      skills: ["Python", "SQL", "Statistics", "Machine Learning"],
      salary: "$100k - $160k",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Your Career Matches</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Based on your resume and preferences, here are your top career matches
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((career, index) => (
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
                <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
                  {career.matchScore}% Match
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-accent px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-gray-600">{career.salary}</div>
                  <button className="text-primary hover:text-primary-hover flex items-center gap-2 transition-colors">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Careers;