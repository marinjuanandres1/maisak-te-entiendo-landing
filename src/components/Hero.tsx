import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75dvh] flex-col items-center justify-center overflow-hidden px-4 py-12 sm:min-h-[80dvh] sm:px-6 sm:py-20">
      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(95,7,19,0.12),transparent_70%)]" />

      {/* Decorative animated rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-[280px] w-[280px] rounded-full border border-burgundy/15 sm:h-[360px] sm:w-[360px] md:h-[560px] md:w-[560px]"
          style={{ animation: "pulse-ring 6s ease-in-out infinite" }}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-[200px] w-[200px] rounded-full border border-burgundy/8 sm:h-[280px] sm:w-[280px] md:h-[440px] md:w-[440px]"
          style={{ animation: "pulse-ring 6s ease-in-out 1s infinite" }}
        />
      </div>

      {/* Floating sun circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(248,229,177,0.08)_0%,rgba(95,7,19,0.12)_40%,transparent_70%)] sm:h-40 sm:w-40 md:h-72 md:w-72"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
      </motion.div>

      {/* Small decorative dots */}
      <div
        className="pointer-events-none absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-gold/40"
        style={{ animation: "shimmer 4s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-gold/30"
        style={{ animation: "shimmer 5s ease-in-out 1s infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-[25%] left-[25%] h-1 w-1 rounded-full bg-gold/25"
        style={{ animation: "shimmer 6s ease-in-out 2s infinite" }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-3 font-body text-[10px] font-light tracking-[0.2em] text-gray-warm uppercase sm:mb-4 sm:text-xs sm:tracking-[0.35em] md:text-sm"
        >
          Lanzamiento
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-gold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl"
          style={{ animation: "shimmer 4s ease-in-out infinite" }}
        >
          TE ENTIENDO
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto my-4 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent sm:my-6 sm:w-32 md:w-48"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-sm font-light tracking-[0.15em] text-white-soft/80 sm:text-base sm:tracking-[0.25em] md:text-lg"
        >
          MAISAK
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 flex flex-col items-center sm:mt-20"
        >
          <img
            src="/logos/sala_despecho_cream.png"
            alt="Sala de Despecho"
            className="w-32 object-contain sm:w-40"
          />
          <p className="mt-4 font-body text-xs font-light text-gray-warm/70 sm:text-sm">
            Miércoles 18 de marzo &middot; 5pm
          </p>
          <p className="mt-1 font-body text-xs font-light text-gray-warm/70 sm:text-sm">
            Cra. 13a #93-91
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator — clickable chevron */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() =>
          document
            .getElementById("mensaje")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer border-none bg-transparent p-2 sm:bottom-10"
        aria-label="Scroll down"
      >
        <motion.svg
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-6 text-gold/60 sm:h-7 sm:w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>
    </section>
  );
}
