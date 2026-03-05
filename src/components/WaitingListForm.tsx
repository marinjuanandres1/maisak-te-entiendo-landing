import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbxH6Ei8Copm3zcXyJfzud6vHfB5iuDgHVxXz_5lR6qZxgKtKYhP4uNcvkra4Xwo0AwfQg/exec";
const TOKEN = "wX7qMhVr7ouABik0DIcEPOMxeQ23qh9OOxDg";

export default function WaitingListForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("[Maisak Form] Submit started");
    setSending(true);
    setError("");

    try {
      const url = `${WEBAPP_URL}?token=${encodeURIComponent(TOKEN)}`;
      const body = {
        name: name.trim(),
        email: email.trim(),
        whatsapp: phone.trim(),
      };

      console.log("[Maisak Form] Sending POST to:", url);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(body),
        redirect: "follow",
      });

      console.log("[Maisak Form] Response:", {
        status: res.status,
        statusText: res.statusText,
        type: res.type,
        ok: res.ok,
      });

      const text = await res.text();
      console.log("[Maisak Form] Response body:", text);

      try {
        const data = JSON.parse(text);
        if (data.ok) {
          setSubmitted(true);
        } else {
          setError(data.error || "Error al registrarte.");
        }
      } catch {
        // Response wasn't JSON (e.g. redirect page) but POST was processed
        setSubmitted(true);
      }
    } catch (err) {
      console.error("[Maisak Form] Error:", err);
      if (err instanceof TypeError && (err as Error).message.includes("Failed to fetch")) {
        setError("Error de conexión. Intenta de nuevo.");
      } else {
        setError("Hubo un error. Intenta de nuevo.");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="registro"
      className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Ambient glow behind card */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,168,83,0.05),transparent_60%)] sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[500px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md px-1"
      >
        {/* Section heading */}
        <div className="mb-8 text-center sm:mb-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-6 h-px w-16 bg-gold/40"
          />
          <h2 className="font-heading text-xl font-semibold text-white-soft sm:text-2xl md:text-3xl">
            Lista de Espera
          </h2>
          <p className="mx-auto mt-3 max-w-xs font-body text-sm font-light leading-relaxed text-gray-warm">
            Suscríbete para entrar a la lista de espera del evento exclusivo de
            lanzamiento
          </p>
        </div>

        {/* Form card */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/[0.06] bg-black-card/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8"
            >
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-light tracking-[0.15em] text-gray-warm uppercase"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre completo"
                    className="w-full min-h-[48px] rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-body text-base text-white-soft placeholder-gray-warm/50 outline-none transition-all duration-300 focus:border-gold/40 focus:ring-1 focus:ring-gold/20 [font-size:16px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-light tracking-[0.15em] text-gray-warm uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full min-h-[48px] rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-body text-base text-white-soft placeholder-gray-warm/50 outline-none transition-all duration-300 focus:border-gold/40 focus:ring-1 focus:ring-gold/20 [font-size:16px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-light tracking-[0.15em] text-gray-warm uppercase"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="w-full min-h-[48px] rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-body text-base text-white-soft placeholder-gray-warm/50 outline-none transition-all duration-300 focus:border-gold/40 focus:ring-1 focus:ring-gold/20 [font-size:16px]"
                  />
                </div>
              </div>

              {error && (
                <p className="mt-4 text-center text-xs text-red-400">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={sending ? {} : { scale: 1.02 }}
                whileTap={sending ? {} : { scale: 0.98 }}
                className="group relative mt-6 w-full min-h-[48px] cursor-pointer overflow-hidden rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light py-4 font-body text-sm font-semibold tracking-[0.15em] text-black-deep uppercase transition-shadow duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:cursor-wait disabled:opacity-70 active:scale-[0.98] sm:mt-8 sm:py-3.5"
              >
                <span className="relative z-10">
                  {sending ? "Enviando..." : "Registrarme"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-2xl border border-gold/20 bg-black-card/80 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10"
            >
              {/* Gold circle check */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <svg
                  className="h-7 w-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gold">
                ¡Estás en la lista!
              </h3>
              <p className="mt-2 font-body text-sm font-light text-gray-warm">
                Te notificaremos con los detalles del evento exclusivo.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
