
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground animate-fade-in">
            Track your productivity like never before
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-slide-in">
            Master Your Time with{" "}
            <span className="text-primary">Trackify</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl animate-slide-in">
            Create tasks, track your time, and get personalized insights to boost your productivity.
            Discover when you're most productive and optimize your workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 animate-slide-in">
            <Link to="/register">
              <Button size="lg" className="gap-1">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mt-12 md:mt-16">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border bg-background shadow-lg animate-fade-in">
          <div className="aspect-[16/9] bg-gradient-to-tr from-secondary via-primary/20 to-background flex items-center justify-center">
            <div className="glass-card p-6 w-4/5 max-w-3xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Your Dashboard</h3>
                  <div className="text-sm text-muted-foreground">Today: 5h 42m</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border shadow-sm">
                    <div className="font-medium">Work</div>
                    <div className="text-2xl font-bold text-primary">3h 15m</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border shadow-sm">
                    <div className="font-medium">Study</div>
                    <div className="text-2xl font-bold text-primary">1h 45m</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 border shadow-sm">
                    <div className="font-medium">Fitness</div>
                    <div className="text-2xl font-bold text-primary">42m</div>
                  </div>
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
