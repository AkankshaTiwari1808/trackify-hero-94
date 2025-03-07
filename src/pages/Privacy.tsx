
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
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
                  Legal
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Privacy Policy
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Last updated: May 1, 2023
                </p>
              </div>

              <div className="prose prose-green dark:prose-invert max-w-3xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-lg p-8 border border-secondary/20">
                <h2>Introduction</h2>
                <p>
                  At Trackify, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by all terms of this Privacy Policy.
                </p>

                <h2>Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>
                  We may collect personal information that you provide directly to us, such as:
                </p>
                <ul>
                  <li>Name, email address, and contact information when you register for an account</li>
                  <li>Billing information when you subscribe to a paid service</li>
                  <li>Profile information and preferences</li>
                  <li>Communications you send to us</li>
                </ul>

                <h3>Usage and Analytics Information</h3>
                <p>
                  We automatically collect certain information about how you use our services, such as:
                </p>
                <ul>
                  <li>Tasks you create and time entries you record</li>
                  <li>Device information (browser type, operating system, device type)</li>
                  <li>Log data (IP address, access dates and times, features used)</li>
                  <li>Performance data and crash reports</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect primarily to provide, maintain, and improve our services. Specifically, we may use your information to:
                </p>
                <ul>
                  <li>Create and manage your account</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information, updates, and security alerts</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Provide customer support</li>
                  <li>Analyze usage patterns to improve our services</li>
                  <li>Personalize your experience and provide content or features that match your profile and interests</li>
                </ul>

                <h2>Sharing Your Information</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>With your consent or at your direction</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2>Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, such as:
                </p>
                <ul>
                  <li>Accessing, correcting, or deleting your personal information</li>
                  <li>Objecting to our processing of your data</li>
                  <li>Requesting restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdrawing consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided at the end of this Privacy Policy.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: privacy@trackify.com<br />
                  Address: 123 Productivity Lane, San Francisco, CA 94107
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
