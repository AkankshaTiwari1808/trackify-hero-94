
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, PhoneCall, MapPin } from "lucide-react";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
                  Contact Us
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get In Touch
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <Card className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">For general inquiries:</p>
                    <a href="mailto:info@trackify.com" className="text-primary hover:underline">
                      info@trackify.com
                    </a>
                    <p className="text-muted-foreground mt-2 mb-2">For support:</p>
                    <a href="mailto:support@trackify.com" className="text-primary hover:underline">
                      support@trackify.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <PhoneCall className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Monday to Friday, 9am to 5pm</p>
                    <a href="tel:+1-555-123-4567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-secondary/20 hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Productivity Lane<br />
                      Suite 456<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-12 bg-white/70 backdrop-blur-sm border-secondary/20">
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                      <p className="text-muted-foreground mb-4">
                        Fill out the form and we'll get back to you as soon as possible.
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <span>We usually respond within 24 hours</span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Your name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Your email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          placeholder="Subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Your message" 
                          rows={5} 
                          value={formData.message}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
