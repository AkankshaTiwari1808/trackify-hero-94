
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
                  FAQ
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about Trackify and how it can help you master your time.
                </p>
              </div>

              <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm border border-secondary/20 rounded-lg p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">
                      How does Trackify help me manage my time better?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Trackify lets you track exactly how much time you spend on different tasks and projects. With this data, you can identify time-wasting activities, optimize your schedule, and focus on high-priority work. Our analytics provide personalized insights to help you make better decisions about how you use your time.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">
                      Is my data secure with Trackify?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Absolutely. We take data security very seriously. All your information is encrypted both in transit and at rest. We never share your personal data with third parties, and you maintain full ownership of your data. You can export or delete your information at any time.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">
                      Can I use Trackify for my team?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! Trackify offers team plans that allow managers to get an overview of team productivity while respecting individual privacy. You can track project time, allocate resources more effectively, and identify bottlenecks in your workflow. Our team features include shared projects, time approval workflows, and team analytics.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">
                      How accurate is the time tracking?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Trackify offers precise second-by-second tracking. You can start and stop the timer as you work, or manually enter time if you prefer. The app also detects idle time and asks if you want to keep or discard it, ensuring your tracked time reflects your actual work.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">
                      Can I integrate Trackify with other tools?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Trackify integrates with popular productivity tools including project management software, calendars, and communication platforms. This allows you to track time directly from your existing workflow without switching between multiple apps.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-lg font-medium">
                      What if I forget to start the timer?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      No problem! Trackify allows you to manually add time entries for past work. You can specify the date, duration, project, and any notes about the work completed. This ensures your time tracking remains complete even if you occasionally forget to use the timer.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-lg font-medium">
                      Is there a free plan available?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, Trackify offers a free plan that includes basic time tracking features, limited reports, and up to three active projects. This is perfect for individuals just getting started with time management. For more advanced features, analytics, and team capabilities, check out our premium plans.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-lg font-medium">
                      How can I get started with Trackify?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Getting started is easy! Simply sign up for a free account, create your first project, and start tracking time. We offer an interactive onboarding guide that will walk you through the key features. You can be up and running in less than 5 minutes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
