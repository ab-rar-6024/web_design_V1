"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the APM Group Private Limited website, mobile application, or any associated services ('Platform'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, you must not use our Platform.",
      "APM Group Private Limited reserves the right to modify these Terms at any time. Continued use of the Platform after any such modification constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    title: "Use of the Platform",
    body: [
      "You may use our Platform only for lawful purposes and in accordance with these Terms. You agree not to use the Platform in any way that violates applicable laws, regulations, or the rights of any person or entity.",
      "You must not attempt to gain unauthorized access to any part of the Platform, its related systems, or any network connected to it. You must not transmit any unsolicited commercial communications or engage in any conduct that may disrupt or damage the Platform.",
    ],
  },
  {
    title: "Product and Service Information",
    body: [
      "APM Group provides IoT hardware, GPS tracking devices, speed governors, automotive safety systems, and related software solutions. Product specifications, pricing, and availability are subject to change without notice.",
      "Descriptions, images, and technical specifications of products on the Platform are provided for informational purposes only. APM Group makes no warranty that the descriptions are accurate, complete, or current.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on the Platform, including but not limited to text, graphics, logos, images, software, and product designs, is the exclusive property of APM Group Private Limited or its content licensors and is protected under applicable Indian intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works based on any content from this Platform without prior written consent from APM Group.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, APM Group Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform or our products and services.",
      "Our total liability to you for any claim arising from the use of the Platform shall not exceed the amount paid by you, if any, for accessing the relevant product or service.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "If you create an account on our Platform, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You must immediately notify APM Group of any unauthorized use of your account. APM Group is not liable for any loss resulting from unauthorized access to your account caused by your failure to safeguard your credentials.",
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      "The Platform may contain links to third-party websites or services. APM Group has no control over these external sites and does not accept responsibility for their content, practices, or availability.",
      "The inclusion of any third-party link does not imply endorsement by APM Group.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are governed by and construed in accordance with the laws of India. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.",
    ],
  },
  {
    title: "Termination",
    body: [
      "APM Group reserves the right to terminate or suspend your access to the Platform at any time, with or without cause, with or without notice, effective immediately.",
      "Upon termination, all provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.",
    ],
  },
];

export default function TermsPage() {
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
              <FileText className="w-4 h-4 text-cyan-bright" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-bright">Legal</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight"
            >
              Terms of <span className="text-gradient">Service</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-white/55 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              Please read these Terms of Service carefully before using the APM Group platform, products, or services.
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
            <h3 className="text-base font-bold text-white">Questions About These Terms?</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              If you have any questions or concerns regarding these Terms of Service, please contact us.
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
