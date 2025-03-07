
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary animate-fade-in">
            Track your productivity like never before
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in">
            Master Your Time with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Trackify</span>
          </h1>
          <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl animate-slide-in">
            Create tasks, track your time, and get personalized insights to boost your productivity.
            Take control of your day and optimize your workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 animate-slide-in">
            <Link to="/register">
              <Button size="lg" className="gap-1 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-lg">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mt-16 md:mt-20">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-xl animate-fade-in">
          <div className="aspect-[16/9] bg-gradient-to-tr from-primary/20 via-purple-300/10 to-background flex items-center justify-center p-8">
            <div className="glass-card p-8 w-full max-w-3xl rounded-xl backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border border-white/20 dark:border-slate-700/20 shadow-lg">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Your Dashboard</h3>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Ready to track</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/20 shadow-sm transition-all hover:shadow-md hover:scale-105">
                    <div className="font-medium text-muted-foreground">Work</div>
                    <div className="text-2xl font-bold text-primary mt-1">0h 00m</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/20 shadow-sm transition-all hover:shadow-md hover:scale-105">
                    <div className="font-medium text-muted-foreground">Study</div>
                    <div className="text-2xl font-bold text-primary mt-1">0h 00m</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/20 shadow-sm transition-all hover:shadow-md hover:scale-105">
                    <div className="font-medium text-muted-foreground">Fitness</div>
                    <div className="text-2xl font-bold text-primary mt-1">0h 00m</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link to="/dashboard">
                    <Button size="sm" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                      Get Started <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
