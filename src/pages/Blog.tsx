
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Time Management Techniques That Actually Work",
    excerpt: "Discover proven techniques to make the most of your time and boost your productivity.",
    date: "May 15, 2023",
    author: "Alex Johnson",
    category: "Productivity",
    imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=600&h=350"
  },
  {
    id: 2,
    title: "The Science Behind Deep Work",
    excerpt: "Learn how focusing deeply on important tasks can transform your productivity and results.",
    date: "June 2, 2023",
    author: "Sarah Miller",
    category: "Focus",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=350"
  },
  {
    id: 3,
    title: "Creating a Morning Routine for Success",
    excerpt: "How the first hour of your day can set you up for productivity and focus.",
    date: "July 11, 2023",
    author: "Mark Thompson",
    category: "Habits",
    imageUrl: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=600&h=350"
  },
  {
    id: 4,
    title: "The Pomodoro Technique: Is It Right For You?",
    excerpt: "A deep dive into one of the most popular time management methods and how to adapt it.",
    date: "August 7, 2023",
    author: "Emma Wilson",
    category: "Techniques",
    imageUrl: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&q=80&w=600&h=350"
  },
  {
    id: 5,
    title: "Digital Minimalism: Focusing in a Noisy World",
    excerpt: "How reducing digital distractions can help you regain control of your time and attention.",
    date: "September 18, 2023",
    author: "James Carter",
    category: "Digital Wellbeing",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=350"
  },
  {
    id: 6,
    title: "Time Blocking vs. To-Do Lists: What Works Better?",
    excerpt: "A comparison of two popular time management strategies and when to use each one.",
    date: "October 5, 2023",
    author: "Christine Park",
    category: "Planning",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=350"
  }
];

const Blog = () => {
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
                  Our Blog
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Insights on Productivity & Time Management
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover tips, techniques, and insights to help you make the most of your time.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="font-normal">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <p className="text-sm text-muted-foreground">By {post.author}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
