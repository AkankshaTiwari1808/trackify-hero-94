
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FeaturesContent from "@/components/Features";
import Footer from "@/components/Footer";

const Features = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 pt-16">
          <div className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Features
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need to Master Productivity
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Trackify combines powerful time tracking with smart insights to help you optimize your workflow.
                </p>
              </div>
            </div>
          </div>
          <FeaturesContent />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Features;
