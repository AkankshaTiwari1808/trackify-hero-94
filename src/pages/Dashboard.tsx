
import { useState } from "react";
import Navbar from "@/components/Navbar";
import DashboardComponent from "@/components/dashboard/Dashboard";
import Footer from "@/components/Footer";

const Dashboard = () => {
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
          <DashboardComponent />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
