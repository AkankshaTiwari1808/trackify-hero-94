
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const plans = [
    {
      name: "Free",
      description: "For individuals just getting started with time tracking",
      price: { monthly: "$0", yearly: "$0" },
      features: [
        "Up to 5 active tasks",
        "Basic time tracking",
        "7-day history",
        "Export to CSV"
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "For professionals who need advanced time tracking",
      price: { monthly: "$9", yearly: "$90" },
      features: [
        "Unlimited tasks",
        "Advanced analytics",
        "Unlimited history",
        "Priority support",
        "Team collaboration (up to 3)",
        "Export to PDF/CSV"
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Team",
      description: "For teams that need to collaborate effectively",
      price: { monthly: "$19", yearly: "$190" },
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced permissions",
        "Team analytics",
        "API access",
        "SSO Authentication",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false,
    }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 pt-16">
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-8">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Pricing
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for you and start tracking your productivity today.
                </p>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center rounded-full border p-1">
                  <Button 
                    variant={billingCycle === "monthly" ? "default" : "ghost"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setBillingCycle("monthly")}
                  >
                    Monthly
                  </Button>
                  <Button 
                    variant={billingCycle === "yearly" ? "default" : "ghost"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setBillingCycle("yearly")}
                  >
                    Yearly <span className="ml-1 text-xs">Save 20%</span>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {plans.map((plan) => (
                  <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                        <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
                          Popular
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-4">
                        <span className="text-3xl font-bold">{plan.price[billingCycle]}</span>
                        {plan.name !== "Free" && <span className="text-muted-foreground ml-1">{billingCycle === "monthly" ? "/month" : "/year"}</span>}
                      </div>
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        {plan.cta}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
