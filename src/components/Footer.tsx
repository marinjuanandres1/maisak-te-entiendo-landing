export default function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-12 sm:pt-16">
      <div className="mx-auto mb-10 h-px w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent sm:w-48" />

      {/* Maisak — central artist */}
      <div className="flex justify-center">
        <img
          src="/logos/maisak_logo.png"
          alt="Maisak"
          className="h-10 w-auto object-contain opacity-90 sm:h-14"
        />
      </div>

      {/* Supporting brands */}
      <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-8 sm:max-w-sm sm:gap-12">
        <img
          src="/logos/billboard_logo.png"
          alt="Billboard"
          className="h-5 w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-80 sm:h-6"
        />
        <img
          src="/logos/siente_logo.png"
          alt="Siente"
          className="h-6 w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-80 sm:h-8"
        />
        <img
          src="/logos/touring_logo.png"
          alt="Touring"
          className="h-6 w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-80 sm:h-8"
        />
      </div>

      <p className="mt-10 font-body text-[10px] font-light tracking-[0.25em] text-gray-warm/40 uppercase sm:text-xs">
        Maisak &times; Nicky Jam &mdash; 2026
      </p>
    </footer>
  );
}
