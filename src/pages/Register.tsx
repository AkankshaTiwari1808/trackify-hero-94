
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/auth/AuthForm";
import Footer from "@/components/Footer";

const Register = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 flex items-center justify-center p-4 pt-24 md:pt-32">
          <AuthForm type="register" />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
