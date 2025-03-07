
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "UX Designer",
    company: "Creative Studios",
    content: "Trackify has completely transformed how I manage my time. I can now see where my hours are going and make adjustments to focus on what truly matters. The insights are invaluable!",
    stars: 5,
    avatar: "ET"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "TechLabs",
    content: "As a developer, I need to balance coding time with meetings and planning. Trackify helps me ensure I'm spending enough time in deep work mode. The weekly reports have helped me optimize my schedule.",
    stars: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Freelance Writer",
    company: "Self-employed",
    content: "Being a freelancer means juggling multiple projects. With Trackify, I can accurately track time spent on each client's work, which has made billing more transparent and helped me identify which projects are most profitable.",
    stars: 4,
    avatar: "SJ"
  },
  {
    id: 4,
    name: "David Garcia",
    role: "Marketing Director",
    company: "Brand Solutions",
    content: "Our team has seen a 30% productivity increase since implementing Trackify. We're more accountable, meetings are shorter, and we have data to back up our resource allocation decisions.",
    stars: 5,
    avatar: "DG"
  },
  {
    id: 5,
    name: "Lisa Patel",
    role: "Product Manager",
    company: "InnovateTech",
    content: "Trackify's analytics have been eye-opening. I discovered I was spending too much time on low-impact tasks and not enough on strategic planning. Making that adjustment has accelerated our product development.",
    stars: 4,
    avatar: "LP"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Entrepreneur",
    company: "StartUp Ventures",
    content: "Running a startup means wearing many hats. Trackify helps me ensure I'm allocating appropriate time to each area of the business. The streak feature keeps me motivated to maintain good habits.",
    stars: 5,
    avatar: "JW"
  }
];

const Testimonials = () => {
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
                  Testimonials
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Users Say
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it — hear from people who've transformed their productivity with Trackify.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.stars ? "fill-primary text-primary" : "fill-muted text-muted"}`} 
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
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

export default Testimonials;
