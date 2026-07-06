"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    title: "What Are Cookies?",
    body: [
      "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, improve user experience, and provide information to site owners.",
      "Cookies can be 'session cookies' (deleted when you close your browser) or 'persistent cookies' (which remain on your device for a set period or until you delete them).",
    ],
  },
  {
    title: "How APM Group Uses Cookies",
    body: [
      "APM Group Private Limited uses cookies on our website and platform for various purposes, including enabling essential functionality, remembering your preferences, analysing site usage, and delivering relevant content.",
      "We do not use cookies to collect personally identifiable information beyond what is necessary for these purposes.",
    ],
  },
  {
    title: "Types of Cookies We Use",
    body: [
      "Strictly Necessary Cookies: These cookies are essential for the website to function and cannot be switched off. They are set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms.",
      "Performance & Analytics Cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information collected is aggregated and therefore anonymised.",
      "Functional Cookies: These cookies enable enhanced functionality and personalisation, such as remembering your language preferences or region. They may be set by us or by third-party providers whose services we use.",
      "Targeting / Advertising Cookies: These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other websites.",
    ],
  },
  {
    title: "Third-Party Cookies",
    body: [
      "Some cookies on our Platform are placed by third-party services, including analytics providers (such as Google Analytics) and social media platforms. These third parties have their own privacy and cookie policies.",
      "APM Group does not control these third-party cookies and is not responsible for the data practices of these third parties.",
    ],
  },
  {
    title: "Managing Your Cookie Preferences",
    body: [
      "You can control and manage cookies in your browser settings. Most browsers allow you to view, delete, and block cookies from websites. Please note that disabling certain cookies may affect the functionality of our Platform.",
      "To manage cookies in your browser, please refer to your browser's help documentation. Common browsers include Chrome, Firefox, Safari, Edge, and Opera.",
    ],
  },
  {
    title: "Cookie Retention",
    body: [
      "Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a specified duration (typically 30 days to 2 years), or until you manually delete them.",
      "The specific retention period for each cookie depends on its purpose and type.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We encourage you to periodically review this page for the latest information.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">
        {/* Hero */}
        <section className="relative py-16 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(62,189,239,0.06),transparent)]" />
          <div className="max-w-3xl mx-auto relative z-10 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto"
            >
              <Cookie className="w-4 h-4 text-cyan-bright" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-bright">Legal</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight"
            >
              Cookies <span className="text-gradient">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-white/55 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              Learn how APM Group uses cookies and similar tracking technologies on our platform, and how you can manage your preferences.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 max-w-3xl mx-auto">
          <div className="flex flex-col gap-10">
            {sections.map((sec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3"
              >
                <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-5 bg-cyan-bright rounded-full flex-shrink-0" />
                  {sec.title}
                </h2>
                {sec.body.map((para, i) => (
                  <p key={i} className="text-white/60 text-sm leading-relaxed">{para}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-2xl p-7 flex flex-col gap-3"
            style={{ background: "rgba(62,189,239,0.04)", border: "1px solid rgba(62,189,239,0.12)" }}
          >
            <h3 className="text-base font-bold text-white">Questions About Cookies?</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              For any questions or concerns regarding our use of cookies, please contact our team.
            </p>
            <div className="text-sm text-white/80 flex flex-col gap-1">
              <span className="font-semibold text-white">APM Group Private Limited</span>
              <span>No. 21, School Street, Chettiyaragaram,</span>
              <span>Vanagaram, Chennai – 600 095</span>
              <span className="mt-1">Phone: <a href="tel:9600696008" className="text-cyan-bright hover:opacity-75 transition-opacity">9600696008</a></span>
            </div>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-bright text-navy-dark font-bold text-sm hover:-translate-y-0.5 transition-transform w-fit"
            >
              Contact Us
            </Link>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
