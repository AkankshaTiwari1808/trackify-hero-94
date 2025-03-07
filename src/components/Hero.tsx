
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 nature-pattern">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground animate-fade-in">
            Your time, your control
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in">
            Master Your Time with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Trackify</span>
          </h1>
          <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl animate-slide-in">
            Take control of your productivity with our intuitive time tracking tool.
            Create tasks, track your time, and get meaningful insights to optimize your day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 animate-slide-in">
            <Link to="/register">
              <Button size="lg" className="gap-1 bg-gradient-to-r from-primary to-emerald-400 hover:from-primary/90 hover:to-emerald-400/90 shadow-lg">
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

      <div className="container px-4 md:px-6 mt-16 md:mt-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/10 shadow-xl animate-fade-in">
          <div className="aspect-[16/9] bg-gradient-to-tr from-primary/10 via-secondary to-white/80 dark:to-slate-900/80 flex items-center justify-center p-8">
            <div className="glass-card p-8 w-full max-w-4xl rounded-xl backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-slate-700/20 shadow-lg">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Your Dashboard</h3>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Track your progress</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-border">
                    <h4 className="font-medium">Today's Tasks</h4>
                    <span className="text-sm text-muted-foreground">Monday, May 15</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Project Research</h5>
                          <p className="text-sm text-muted-foreground">Work</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-sm font-semibold">00:00:00</div>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Clock className="h-4 w-4" />
                            <span className="sr-only">Start timer</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Study French</h5>
                          <p className="text-sm text-muted-foreground">Learning</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-sm font-semibold">00:00:00</div>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Clock className="h-4 w-4" />
                            <span className="sr-only">Start timer</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Evening Run</h5>
                          <p className="text-sm text-muted-foreground">Fitness</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-sm font-semibold">00:00:00</div>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Clock className="h-4 w-4" />
                            <span className="sr-only">Start timer</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Link to="/dashboard">
                    <Button className="gap-1 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/10">
                      Go to Dashboard <ArrowRight className="h-4 w-4" />
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
