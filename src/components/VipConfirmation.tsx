import { motion } from "framer-motion";

interface VipConfirmationProps {
  guestName: string;
}

export default function VipConfirmation({ guestName }: VipConfirmationProps) {
  return (
    <section
      id="vip-confirmacion"
      className="relative flex flex-col items-center justify-center px-5 py-12 sm:px-6 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-2xl border border-gold/20 bg-gradient-to-b from-[#160707] to-[#100404] px-5 py-10 shadow-[0_0_80px_rgba(248,229,177,0.05)] sm:px-8 sm:py-14">
          {/* VIP label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center font-body text-[10px] font-light tracking-[0.4em] text-gold/70 uppercase sm:text-xs"
          >
            Invitado VIP
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto my-5 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent sm:my-6 sm:w-20"
          />

          {/* Guest name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center font-heading text-2xl font-bold tracking-wide text-gold sm:text-3xl md:text-4xl"
            style={{ animation: "shimmer 4s ease-in-out infinite" }}
          >
            {guestName}
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto my-6 h-px w-12 bg-gradient-to-r from-transparent via-gold/30 to-transparent sm:my-8"
          />

          {/* Confirmation seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.07] shadow-[0_0_40px_rgba(248,229,177,0.08)] sm:h-24 sm:w-24"
          >
            <svg
              className="h-9 w-9 text-gold sm:h-10 sm:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Confirmation text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 text-center font-heading text-base font-medium tracking-wide text-white-soft sm:text-lg"
          >
            Estás en la lista
          </motion.p>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 sm:mt-10"
          >
            <div className="mx-auto h-px w-10 bg-gradient-to-r from-transparent via-burgundy/30 to-transparent" />
            <div className="mt-6 flex flex-col items-center gap-1 sm:mt-8">
              <img
                src="/logos/sala_despecho_cream.png"
                alt="Sala de Despecho"
                className="mb-3 w-24 object-contain opacity-70 sm:w-28"
              />
              <p className="font-body text-xs font-light text-gray-warm/60 sm:text-sm">
                Miércoles 18 de marzo &middot; 4:30pm
              </p>
              <p className="font-body text-xs font-light text-gray-warm/60 sm:text-sm">
                Cra. 13a #93-91
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
