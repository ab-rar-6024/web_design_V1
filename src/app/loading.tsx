export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center gap-6 bg-[#050d14]"
    >
      {/* APM Logo */}
      <div className="relative">
        {/* Glow behind logo */}
        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{ background: "rgba(62,189,239,0.15)", transform: "scale(1.8)" }}
        />
        <img
          src="https://apmgroups.in/img/Layoutimg/apm-logo-1.png"
          alt="APM Group"
          className="relative h-12 w-auto object-contain"
          style={{ filter: "brightness(1.05)" }}
        />
      </div>

      {/* Spinner track */}
      <div className="relative w-10 h-10">
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: "2px solid rgba(62,189,239,0.12)" }}
        />
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            border: "2px solid transparent",
            borderTopColor: "#3ebdef",
            animationDuration: "0.9s",
            animationTimingFunction: "cubic-bezier(0.6,0,0.4,1)",
          }}
        />
      </div>
    </div>
  );
}
