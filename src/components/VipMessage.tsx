import { motion } from "framer-motion";

interface VipMessageProps {
  guestName: string;
}

export default function VipMessage({ guestName }: VipMessageProps) {
  const firstName = guestName.split(" ")[0];

  return (
    <section id="mensaje" className="relative px-5 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(248,229,177,0.04),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-md"
      >
        <div className="rounded-2xl border border-gold/15 bg-gradient-to-b from-[#140606] to-[#0f0404] px-6 py-10 shadow-[0_8px_60px_rgba(248,229,177,0.04)] sm:px-10 sm:py-14">
          <div className="mx-auto mb-8 h-px w-12 bg-gradient-to-r from-transparent via-gold/40 to-transparent sm:mb-10" />

          <div className="mx-auto max-w-[28ch] text-center sm:max-w-[34ch]">
            <p className="font-body text-sm font-light italic leading-[1.8] text-white-soft/85 sm:text-base">
              {firstName}, esta es una invitación personal pa&apos; ti.
            </p>

            <p className="mt-5 font-body text-sm font-light italic leading-[1.8] text-white-soft/85 sm:mt-6 sm:text-base">
              Quiero que estés ahí, de cerca, compartiendo un rato y cantando
              juntos.
            </p>

            <p className="mt-5 font-body text-sm font-light italic leading-[1.8] text-white-soft/60 sm:mt-6 sm:text-base">
              Si alguna vez una canción mía te ha acompañado en un
              despecho… esta noche es pa&apos; ti.
            </p>
          </div>

          <div className="mx-auto my-8 h-px w-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent sm:my-10" />

          <p className="text-center font-heading text-xl font-semibold tracking-wide text-gold sm:text-2xl">
            Nos vemos, {firstName}
          </p>

          <p className="mt-3 text-center font-body text-xs font-light tracking-[0.1em] text-gray-warm/40 sm:text-sm">
            — Maisak
          </p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        onClick={() =>
          document
            .getElementById("vip-confirmacion")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="mx-auto mt-12 flex cursor-pointer justify-center border-none bg-transparent p-2 sm:mt-16"
        aria-label="Scroll to confirmation"
      >
        <motion.svg
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-6 text-gold/50 sm:h-7 sm:w-7"
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
