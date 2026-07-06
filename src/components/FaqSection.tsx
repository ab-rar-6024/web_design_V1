"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What products and solutions does APM Group offer?",
      answer:
        "APM Group is a premier manufacturer and distributor of certified IoT hardware and automotive safety systems. Our product lineup includes AIS 140 GPS tracking units, speed governors (Speed Limiting Devices), 4G/Wi-Fi vehicle cameras, payload monitoring systems, reverse parking systems, and permanent highway signage.",
    },
    {
      question: "Are your speed governors and GPS devices government certified?",
      answer:
        "Yes, our automotive hardware is fully certified and complies with the latest government mandates, including AIS 140 compliance guidelines. This ensures safety, fuel efficiency, and regulatory compliance for commercial transport vehicles, school buses, and logistics fleets.",
    },
    {
      question: "Can APM's hardware integrate with our custom software?",
      answer:
        "Absolutely. Alongside our hardware products, we develop custom Cloud & SaaS solutions (such as APM One and APM FleetEye). We provide robust APIs and data streaming protocols to integrate real-time GPS coordinates, speed metrics, and vehicle diagnostic data directly into your corporate ERP or database systems.",
    },
    {
      question: "Do you offer installation and on-site support?",
      answer:
        "Yes. Backed by a strong pan-India dealer network of over 1,000 dealers, we offer end-to-end support including hardware installation, calibration, government certification updates, and prompt technical support across multiple cities and regions.",
    },
    {
      question: "What is your 'Green Safety for Sustainability' initiative?",
      answer:
        "At APM, we are committed to balancing industrial progress with environmental care. We have partnered with global reforestation initiatives, committing to contribute to planting trees for every product we sell, aiming to offset our carbon footprint and build a green mobility ecosystem.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-30 border-t border-white/5 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-10">

          {/* ── LEFT: label + heading — sticky while scrolling (~38%) ────────── */}
          <div className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-4 lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan-bright font-bold">
              <span className="w-4 h-px bg-cyan-bright" />
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-snug drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
              Frequently Asked<br />
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              Everything you need to know about APM Group's products, certifications, and support.
            </p>
          </div>

          {/* ── CENTER GAP: keep the truck lane clear (~18%) ─────────────────── */}
          <div className="hidden lg:block lg:w-[18%] flex-shrink-0" />

          {/* ── RIGHT: FAQ accordion list (~44%) ─────────────────────────────── */}
          <div className="w-full lg:w-[44%] space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(5,13,26,0.10)",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    suppressHydrationWarning
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-colors focus:outline-none"
                  >
                    <span className="font-semibold text-white text-sm md:text-base pr-4 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-cyan-bright">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-60 opacity-100 border-t border-white/5"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="p-5 text-sm md:text-base text-white/60 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
