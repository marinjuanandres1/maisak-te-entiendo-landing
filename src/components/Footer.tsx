export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-8 sm:pt-10">
      <div className="mx-auto mb-12 h-px w-40 bg-gradient-to-r from-transparent via-burgundy/40 to-transparent sm:w-56" />

      {/* Maisak — central artist */}
      <div className="flex justify-center">
        <img
          src="/logos/maisak_logo.png"
          alt="Maisak"
          className="h-14 w-auto object-contain opacity-90 sm:h-20"
        />
      </div>

      {/* Supporting brands — Billboard centered */}
      <div className="mx-auto mt-10 flex items-center justify-center gap-5 sm:mt-12 sm:gap-7">
        <img
          src="/logos/siente_logo.png"
          alt="Siente"
          className="w-10 object-contain opacity-45 transition-opacity duration-300 hover:opacity-75 sm:w-12"
        />
        <img
          src="/logos/billboard_logo.png"
          alt="Billboard"
          className="w-28 object-contain opacity-60 transition-opacity duration-300 hover:opacity-90 sm:w-36"
        />
        <img
          src="/logos/touring_logo.png"
          alt="Touring"
          className="w-28 object-contain opacity-45 transition-opacity duration-300 hover:opacity-75 sm:w-36"
        />
      </div>

      <p className="mt-12 text-center font-body text-[10px] font-light tracking-[0.25em] text-gray-warm/30 uppercase sm:text-xs">
        Maisak &times; Nicky Jam &mdash; 2026
      </p>
    </footer>
  );
}
