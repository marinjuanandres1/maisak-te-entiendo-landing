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
      className="relative flex flex-col items-center justify-center px-5 py-12 sm:px-6 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Registration container */}
        <div className="rounded-2xl border border-burgundy/15 bg-gradient-to-b from-[#160707] to-[#100404] px-5 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.5)] sm:px-8 sm:py-10">
          {/* Section heading */}
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="font-heading text-xl font-semibold text-white-soft sm:text-2xl">
              Registro
            </h2>
            <p className="mx-auto mt-2 max-w-xs font-body text-xs font-light leading-relaxed text-gray-warm/70 sm:text-sm">
              Regístrate aquí para entrar en la lista
            </p>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-light tracking-[0.15em] text-gray-warm/70 uppercase"
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
                    className="w-full min-h-[48px] rounded-lg border border-white/[0.06] bg-white/[0.04] px-4 py-3 font-body text-base text-white-soft placeholder-gray-warm/40 outline-none transition-all duration-300 focus:border-gold/30 focus:ring-1 focus:ring-gold/15 [font-size:16px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-light tracking-[0.15em] text-gray-warm/70 uppercase"
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
                    className="w-full min-h-[48px] rounded-lg border border-white/[0.06] bg-white/[0.04] px-4 py-3 font-body text-base text-white-soft placeholder-gray-warm/40 outline-none transition-all duration-300 focus:border-gold/30 focus:ring-1 focus:ring-gold/15 [font-size:16px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-light tracking-[0.15em] text-gray-warm/70 uppercase"
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
                    className="w-full min-h-[48px] rounded-lg border border-white/[0.06] bg-white/[0.04] px-4 py-3 font-body text-base text-white-soft placeholder-gray-warm/40 outline-none transition-all duration-300 focus:border-gold/30 focus:ring-1 focus:ring-gold/15 [font-size:16px]"
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
                className="group relative mt-6 w-full min-h-[48px] cursor-pointer overflow-hidden rounded-lg bg-gradient-to-r from-burgundy via-caramel to-gold py-4 font-body text-sm font-semibold tracking-[0.15em] text-black-deep uppercase transition-shadow duration-300 hover:shadow-lg hover:shadow-burgundy/30 disabled:cursor-wait disabled:opacity-70 active:scale-[0.98] sm:mt-7 sm:py-3.5"
              >
                <span className="relative z-10">
                  {sending ? "Enviando..." : "Registrarme"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-caramel to-burgundy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="py-4 text-center"
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
              <p className="mt-3 font-body text-sm font-light leading-relaxed text-gray-warm">
                Sala de Despecho Bogotá
                <br />
                Cra. 13a #93-91
                <br />
                Miércoles 18 de marzo 4:30pm
              </p>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
