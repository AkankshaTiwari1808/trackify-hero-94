
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
                  We're on a mission to help people make the most of their time.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      At Trackify, we believe that time is our most valuable resource. Our mission is to help people track, analyze, and optimize how they spend their time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                    <p className="text-muted-foreground">
                      We're a passionate team of productivity enthusiasts, developers, and designers who are committed to creating tools that help people achieve more with their time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <p className="text-muted-foreground">
                      Simplicity, effectiveness, and respect for your time guide everything we do. We build tools we would want to use ourselves.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 p-8 bg-white/70 backdrop-blur-sm rounded-xl border border-secondary/20">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  Trackify began in 2023 when our founder realized how much time was being wasted on tasks that weren't aligned with their goals. After trying numerous productivity apps and finding them either too complex or too simple, the idea for Trackify was born.
                </p>
                <p className="mb-4">
                  We launched with a simple mission: create a time tracking tool that's intuitive enough for anyone to use, but powerful enough to provide meaningful insights that help people optimize their time.
                </p>
                <p>
                  Today, Trackify is helping thousands of people around the world make better use of their time, stay focused on what matters, and achieve their goals faster.
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
