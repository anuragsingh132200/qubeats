export default function PageGridBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-[#020313]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(79,70,229,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,70,229,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.3)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_bottom,rgba(147,51,234,0.25)_0%,transparent_65%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

