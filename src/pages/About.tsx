
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
                  Our Story
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Trackify
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  A project by friends, for everyone who values their time.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      Trackify is being built with the belief that time is our most valuable resource. Our mission is to create intuitive tools that help people understand how they spend their time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                    <p className="text-muted-foreground">
                      Founded by two friends, Akanksha and Anchal, who are passionate about productivity and technology. We're building Trackify as a side project with big ambitions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <p className="text-muted-foreground">
                      Simplicity, effectiveness, and respect for your time guide everything we create. We're building tools we want to use ourselves.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-secondary/20">
                <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
                <p className="mb-4">
                  Trackify began as a collaboration between Akanksha and Anchal in 2023. As friends with shared interests in productivity and web development, we noticed how difficult it was to find a time tracking tool that balanced simplicity with powerful insights.
                </p>
                <p className="mb-4">
                  This website is currently under active development, with many exciting features and improvements planned. We're building it step by step, learning and adapting as we go.
                </p>
                <p className="mb-4">
                  Akanksha brings her expertise in user experience and front-end development, while Anchal contributes strong backend development skills and data analysis knowledge. Together, we're creating something we believe will help people make better use of their time.
                </p>
                <p>
                  Thank you for your interest in Trackify! We welcome feedback as we continue to improve and expand the platform.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
