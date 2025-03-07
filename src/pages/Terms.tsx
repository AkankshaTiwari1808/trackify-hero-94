
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
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
                  Terms of Service
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Last updated: May 1, 2023
                </p>
              </div>

              <div className="prose prose-green dark:prose-invert max-w-3xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-lg p-8 border border-secondary/20">
                <h2>Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") govern your access to and use of the Trackify website and services. Please read these Terms carefully before using our services.
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
                </p>

                <h2>Using Our Services</h2>
                <h3>Account Registration</h3>
                <p>
                  To use certain features of our services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>

                <h3>Account Security</h3>
                <p>
                  You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your account. We encourage you to use strong passwords (e.g., a combination of upper and lowercase letters, numbers, and symbols) with your account.
                </p>

                <h2>Subscriptions and Payments</h2>
                <h3>Billing</h3>
                <p>
                  Some of our services are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis, depending on the type of subscription plan you select. At the end of each period, your subscription will automatically renew under the same conditions unless you cancel it or we cancel it.
                </p>

                <h3>Free Trial</h3>
                <p>
                  We may, at our sole discretion, offer a subscription with a free trial for a specified period. You may be required to provide your billing information to sign up for the free trial. If you do not cancel the subscription before the free trial ends, we will begin charging you for the subscription on the first day following the free trial period.
                </p>

                <h2>User Content</h2>
                <p>
                  Our services allow you to create, upload, store, and share content. You retain all rights to your content, but you grant us a license to use it for the purpose of operating and improving our services.
                </p>
                <p>
                  You are solely responsible for the content you post, and you agree not to post content that violates these Terms or the rights of others.
                </p>

                <h2>Intellectual Property Rights</h2>
                <p>
                  The software, design, text, images, and other content used in our services are owned by Trackify or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, and revocable license to use our services for their intended purposes in accordance with these Terms.
                </p>

                <h2>Termination</h2>
                <p>
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use our services will immediately cease. If you wish to terminate your account, you may simply discontinue using our services or contact us to request account deletion.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, in no event shall Trackify, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                  <li>Your access to or use of or inability to access or use our services</li>
                  <li>Any conduct or content of any third party on our services</li>
                  <li>Any content obtained from our services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>

                <h2>Changes to Terms</h2>
                <p>
                  We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to access or use our services after revisions become effective, you agree to be bound by the revised Terms.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  Email: legal@trackify.com<br />
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

export default Terms;
