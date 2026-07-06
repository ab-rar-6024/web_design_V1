import { Cpu, Shield, Users, Globe, BarChart3, Wrench } from "lucide-react";

export default function AboutSection() {
  const strengths = [
    { icon: Cpu,     label: "Automotive Expertise",      desc: "Deep domain knowledge in IoT and vehicle safety hardware" },
    { icon: Shield,  label: "Security-Focused",          desc: "Protocols and hardware engineered for mission-critical environments" },
    { icon: Wrench,  label: "Robust Hardware",           desc: "Industrial-grade manufacturing capabilities across all product lines" },
    { icon: Users,   label: "Strong Partnerships",       desc: "Trusted by 1,600+ dealers and industry-leading organizations" },
    { icon: Globe,   label: "Global Reach",              desc: "Deployed across 10 countries with multilingual support" },
    { icon: BarChart3, label: "Advanced Analytics",      desc: "Real-time monitoring and data-driven fleet management insights" },
  ];

  return (
    <section className="relative z-30 border-t border-white/5 py-14 md:py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://apmgroups.in/img/aboutusdetail/aboutbanner.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ opacity: 0.5, filter: "grayscale(0.3) saturate(0.7)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--overlay-edge) 0%, var(--overlay-mid) 50%, var(--overlay-edge) 100%)" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(62,189,239,0.05) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-10">

          {/* LEFT: heading block (~38%) */}
          <div className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan-bright font-bold">
              <span className="w-4 h-px bg-cyan-bright" />
              About APM Group
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-snug drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
              A Forward-Thinking<br />
              <span className="text-gradient">Technology Company</span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              APM Group specializes in IoT and automotive hardware solutions, transforming vehicle operations through smart, reliable technologies that prioritize safety and efficiency.
            </p>

            {/* Business Divisions */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                { tag: "B2B", label: "Business to Business", desc: "Scalable, secure solutions that optimize operations and enable sustainable business growth." },
                { tag: "B2C", label: "Business to Consumer",  desc: "Consumer-facing platforms designed for secure, seamless, and scalable digital experiences." },
                { tag: "B2G", label: "Business to Government", desc: "Trusted technology built to meet government standards for safety, compliance, and mission-critical performance." },
              ].map((div) => (
                <div
                  key={div.tag}
                  className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(5,13,26,0.10)",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-bold tracking-widest rounded bg-cyan-bright/10 text-cyan-bright border border-cyan-bright/20">
                    {div.tag}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{div.label}</p>
                    <p className="text-xs text-white/50 mt-0.5 leading-relaxed">{div.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER GAP (~18%) */}
          <div className="hidden lg:block lg:w-[18%] flex-shrink-0" />

          {/* RIGHT: Key Strengths grid (~44%) */}
          <div className="w-full lg:w-[44%] grid grid-cols-2 gap-4">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,220,255,0.07)]"
                  style={{
                    background: "rgba(5,13,26,0.10)",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="p-2.5 rounded-lg bg-white/5 w-fit text-cyan-bright group-hover:bg-cyan-bright group-hover:text-navy-dark transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-bright transition-colors duration-300">
                      {s.label}
                    </span>
                    <span className="text-xs text-white/45 leading-relaxed">{s.desc}</span>
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
