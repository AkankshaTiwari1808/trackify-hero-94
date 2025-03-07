
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "We're looking for an experienced Frontend Developer to help build and improve our user interfaces. You'll work with React, TypeScript, and modern frontend tools to create intuitive, responsive experiences.",
    requirements: [
      "5+ years of experience with modern JavaScript and frontend frameworks",
      "Strong experience with React and TypeScript",
      "Experience with responsive design and accessibility",
      "Excellent problem-solving skills and attention to detail",
      "Good communication and collaboration abilities"
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    description: "Join our design team to create beautiful, intuitive experiences for our productivity platform. You'll collaborate with product managers and developers to design features that delight users and solve real problems.",
    requirements: [
      "3+ years of experience in product design",
      "Strong portfolio demonstrating user-centered design process",
      "Experience with design systems and component libraries",
      "Proficiency with Figma or similar design tools",
      "Understanding of accessibility standards and best practices"
    ]
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "Remote (Worldwide)",
    type: "Full-time",
    description: "We're seeking a product manager to help shape the future of our productivity tools. You'll gather user insights, define requirements, and work with engineering and design to bring new features to life.",
    requirements: [
      "3+ years of product management experience",
      "Strong understanding of user-centered design principles",
      "Experience with agile development methodologies",
      "Excellent analytical and problem-solving skills",
      "Outstanding communication and stakeholder management abilities"
    ]
  },
  {
    id: 4,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "New York, NY (In-office)",
    type: "Full-time",
    description: "Help us grow our user base by creating compelling marketing campaigns across multiple channels. You'll work on content creation, email marketing, social media, and more to attract and engage users.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Strong copywriting and content creation skills",
      "Experience with email marketing platforms and social media management",
      "Data-driven approach to measuring campaign effectiveness",
      "Creative thinking and ability to work independently"
    ]
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    description: "As a Customer Success Manager, you'll help our users get the most value from our platform. You'll onboard new customers, provide support, gather feedback, and ensure customer satisfaction and retention.",
    requirements: [
      "3+ years of experience in customer success or account management",
      "Strong communication and relationship-building skills",
      "Experience with productivity software or SaaS products",
      "Problem-solving mindset and ability to work with technical teams",
      "Data analysis skills to track customer health and identify trends"
    ]
  }
];

const Careers = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 pt-16 nature-pattern">
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Careers
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Team
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Help us build the future of productivity and time management.
                </p>
              </div>

              <div className="mb-16 bg-white/70 backdrop-blur-sm rounded-xl border border-secondary/20 p-8">
                <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Mission-Driven</h3>
                    <p className="text-muted-foreground">
                      We're passionate about helping people make the most of their time and achieve their goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Remote-First</h3>
                    <p className="text-muted-foreground">
                      Work from anywhere with flexible hours. We focus on results, not where or when you work.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Competitive Benefits</h3>
                    <p className="text-muted-foreground">
                      Comprehensive health coverage, retirement plans, generous PTO, and professional development budgets.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
              <div className="space-y-6">
                {jobs.map((job) => (
                  <Card key={job.id} className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <p className="text-muted-foreground">{job.department} • {job.location}</p>
                        </div>
                        <Badge className="self-start md:self-center mt-2 md:mt-0">
                          {job.type}
                        </Badge>
                      </div>
                      <p className="mb-4">{job.description}</p>
                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <Button>Apply Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
