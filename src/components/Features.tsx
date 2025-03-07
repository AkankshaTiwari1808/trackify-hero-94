
import { 
  Clock, 
  BarChart3, 
  Lightbulb, 
  BellRing, 
  Trophy, 
  FileDown,
  UserCog,
  ListTodo
} from "lucide-react";

const features = [
  {
    icon: <ListTodo className="h-8 w-8 text-primary" />,
    title: "Task Management",
    description: "Create, edit, and organize tasks by categories like Work, Study, and Fitness."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Time Tracking",
    description: "Start, pause, and stop timers to accurately track time spent on each task."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Progress Analytics",
    description: "View weekly and monthly reports with visualizations to analyze your productivity."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Smart Insights",
    description: "Get AI-powered suggestions to optimize your workflow and improve productivity."
  },
  {
    icon: <BellRing className="h-8 w-8 text-primary" />,
    title: "Reminders",
    description: "Set reminders for pending tasks and get notifications to stay on track."
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Streaks & Gamification",
    description: "Build habits through streaks and earn rewards for consistent progress."
  },
  {
    icon: <FileDown className="h-8 w-8 text-primary" />,
    title: "Export Reports",
    description: "Download your progress reports in PDF or CSV format for external analysis."
  },
  {
    icon: <UserCog className="h-8 w-8 text-primary" />,
    title: "Customization",
    description: "Personalize your experience with dark mode and customizable settings."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Everything You Need to Master Productivity
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Trackify combines powerful time tracking with smart insights to help you optimize your workflow.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-3 rounded-lg border bg-background p-6 transition-all hover:shadow-md"
            >
              <div className="rounded-full bg-secondary p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
