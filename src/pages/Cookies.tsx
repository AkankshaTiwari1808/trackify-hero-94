
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
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
                  Cookie Policy
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Last updated: May 1, 2023
                </p>
              </div>

              <div className="prose prose-green dark:prose-invert max-w-3xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-lg p-8 border border-secondary/20">
                <h2>What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>

                <h2>How We Use Cookies</h2>
                <p>
                  We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.
                </p>

                <h2>Types of Cookies We Use</h2>
                <h3>Strictly Necessary Cookies</h3>
                <p>
                  These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. These cookies don't collect information about you that could be used for marketing or remembering where you've been on the internet.
                </p>

                <h3>Performance Cookies</h3>
                <p>
                  These cookies collect information about how you use our website, like which pages you visited and which links you clicked on. None of this information can be used to identify you. It is all aggregated and, therefore, anonymized. Their sole purpose is to improve website functions.
                </p>

                <h3>Functional Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. The information these cookies collect may be anonymized and they cannot track your browsing activity on other websites.
                </p>

                <h3>Targeting Cookies</h3>
                <p>
                  These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. These cookies use information about your browsing history to group you with other users who have similar interests. Based on that information, third party advertisers can place cookies to enable them to show adverts which we think will be relevant to your interests while you are on third party websites.
                </p>

                <h2>How to Control Cookies</h2>
                <p>
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>

                <h3>Browser Settings</h3>
                <p>
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org/" className="text-primary hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org/" className="text-primary hover:underline">www.allaboutcookies.org</a>.
                </p>

                <h3>Managing Cookies on Popular Browsers</h3>
                <ul>
                  <li><a href="https://support.google.com/accounts/answer/61416" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" className="text-primary hover:underline">Apple Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>

                <h2>Changes to Our Cookie Policy</h2>
                <p>
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our Cookie Policy, please contact us at:
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

export default Cookies;
