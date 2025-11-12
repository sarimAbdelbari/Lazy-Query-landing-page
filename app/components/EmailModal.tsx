"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Loader2, CheckCircle } from "lucide-react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Replace with your SheetDB API URL
      const SHEETDB_API_URL = process.env.NEXT_PUBLIC_SHEETDB_API_URL || "YOUR_SHEETDB_API_URL_HERE";

      const response = await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Email: email,
            Name: name || "N/A",
            Timestamp: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setEmail("");
      setName("");

      // Close modal after success
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md glass-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {status === "success" ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(0, 82, 125, 0.2)' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: 'var(--primary-400)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-white/70">
                  We'll reach out when early access is ready.
                </p>
              </motion.div>
            ) : (
              /* Form State */
              <>
                <div className="mb-6">
                  <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(0, 82, 125, 0.2)' }}>
                    <Mail className="w-6 h-6" style={{ color: 'var(--primary-400)' }} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Join the Waitlist</h2>
                  <p className="text-white/70">
                    Be the first to access premium features and updates.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name (optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none transition-colors disabled:opacity-50"
                      style={{ focusBorderColor: 'var(--primary-400)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-400)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}

                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none transition-colors disabled:opacity-50"
                      style={{ focusBorderColor: 'var(--primary-400)' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-400)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}

                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Join Waitlist</span>
                    )}
                  </button>
                </form>

                <p className="text-white/40 text-xs mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

