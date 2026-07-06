"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const sections = [
  {
    title: "Collection of Information",
    body: [
      "APM Group Private Limited gathers personal data during platform interactions and registration, including your name, date of birth, address, telephone/mobile number, and email ID, along with identity verification documents.",
      "Sensitive data such as payment information and biometric details are collected only with your explicit consent. You may decline to share certain information by choosing not to use specific services that require it.",
      "We also track behavioral patterns and transaction-related information to improve your experience. Third-party business partners operating on our platform maintain their own separate privacy practices, for which APM Group assumes no responsibility.",
    ],
  },
  {
    title: "Use of Information",
    body: [
      "Your personal data enables service delivery and order fulfillment. We use this information to customise your experience, detect and protect against error, fraud, and other criminal activity, and enforce our terms and conditions.",
      "We may send marketing communications with opt-out options provided in every message. Access to certain services may be restricted if required permissions are not granted.",
    ],
  },
  {
    title: "Sharing of Information",
    body: [
      "Your data may be shared among APM Group entities and affiliates for the purpose of service provision. Third-party disclosures may occur with sellers, business partners, third-party service providers including logistics partners.",
      "We make legally mandated disclosures to government agencies or law enforcement bodies in good-faith compliance with applicable law.",
    ],
  },
  {
    title: "Security Precautions",
    body: [
      "APM Group implements reasonable security practices and procedures to prevent unauthorized access, misuse, or disclosure of your personal information.",
      "However, internet transmission carries inherent risks beyond our control. You are responsible for protecting your own login credentials and account access.",
    ],
  },
  {
    title: "Data Deletion and Retention",
    body: [
      "Account deletion is available through your profile settings, resulting in complete removal of your personal data. Pending grievances may prevent immediate deletion.",
      "Data retention follows applicable legal requirements. Anonymized information may persist for research and analytical purposes after account deletion.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to access, modify, and update your personal data at any time through the platform's built-in functionalities.",
    ],
  },
  {
    title: "Consent",
    body: [
      "By using our platform, you authorize APM Group to collect and process your personal data as described in this policy. You consent to being contacted via SMS, instant messaging apps, telephone calls, and/or email.",
      "You may withdraw your consent at any time by contacting our Grievance Officer. Please note that certain service restrictions may apply following consent withdrawal.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "APM Group may update this Privacy Policy periodically. We will notify you of significant changes as required by applicable law. Continued use of our platform following any update constitutes acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPage() {
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
              <Shield className="w-4 h-4 text-cyan-bright" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-bright">Legal</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight"
            >
              Privacy <span className="text-gradient">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-white/55 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              This policy explains how APM Group Private Limited and its affiliates gather, utilise, and safeguard your personal information through our platform, operating exclusively within India.
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

          {/* Grievance Officer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-2xl p-7 flex flex-col gap-3"
            style={{ background: "rgba(62,189,239,0.04)", border: "1px solid rgba(62,189,239,0.12)" }}
          >
            <h3 className="text-base font-bold text-white">Grievance Officer</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              For any grievance or query regarding this Privacy Policy, please contact:
            </p>
            <div className="text-sm text-white/80 flex flex-col gap-1">
              <span className="font-semibold text-white">APM Group Private Limited</span>
              <span>No. 21, School Street, Chettiyaragaram,</span>
              <span>Vanagaram, Chennai – 600 095</span>
              <span className="mt-1">Phone: <a href="tel:9600696008" className="text-cyan-bright hover:opacity-75 transition-opacity">9600696008</a></span>
              <span className="text-white/50 text-xs">Monday – Saturday, 10:00 AM – 7:00 PM</span>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
