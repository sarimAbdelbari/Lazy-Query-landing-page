"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  // Validate email format
  const validateEmail = (emailValue: string): boolean => {
    if (!emailValue.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!EMAIL_REGEX.test(emailValue)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError && value) {
      validateEmail(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setEmailError("");

    // Validate email before submission
    if (!validateEmail(email)) {
      setStatus("idle");
      return;
    }

    try {
      const SHEETDB_API_URL = process.env.NEXT_PUBLIC_SHEETDB_API_URL;

      // Check if API URL is configured
      if (!SHEETDB_API_URL || SHEETDB_API_URL === "YOUR_SHEETDB_API_URL_HERE") {
        throw new Error("API_NOT_CONFIGURED");
      }

      const response = await axios.post(
        SHEETDB_API_URL,
        {
          data: {
            Email: email.trim(),
            Name: name.trim() || "N/A",
            Timestamp: new Date().toISOString(),
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if SheetDB returned an error in the response
      if (response.data?.error) {
        throw new Error("SUBMIT_FAILED");
      }

      setStatus("success");
      setEmail("");
      setName("");

      // Close modal after success
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setErrorMessage("");
        setEmailError("");
      }, 2000);
    } catch (error) {
      setStatus("error");
      
      // Handle axios errors
      if (axios.isAxiosError(error)) {
        // Axios error with response (server responded with error status)
        if (error.response) {
          const status = error.response.status;
          if (status === 400) {
            setErrorMessage("Invalid data. Please check your email and try again.");
          } else if (status === 401 || status === 403) {
            setErrorMessage("Authentication failed. Please contact support.");
          } else if (status >= 500) {
            setErrorMessage("Server error. Please try again in a few moments.");
          } else {
            setErrorMessage("Failed to submit. Please try again.");
          }
        } else if (error.request) {
          // Request was made but no response received (network error)
          setErrorMessage("Network error. Please check your connection and try again.");
        } else {
          // Something else happened
          setErrorMessage("Something went wrong. Please try again.");
        }
      } else if (error instanceof Error) {
        // Handle custom errors
        switch (error.message) {
          case "API_NOT_CONFIGURED":
            setErrorMessage("API is not configured. Please contact support.");
            break;
          case "SUBMIT_FAILED":
            setErrorMessage("Failed to submit. Please try again.");
            break;
          default:
            setErrorMessage("Something went wrong. Please try again.");
        }
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
      
      console.error("Email submission error:", error);
    }
  };

  const handleClose = () => {
    if (status !== "loading") {
      onClose();
      // Reset form after a short delay to allow exit animation
      setTimeout(() => {
        setStatus("idle");
        setEmail("");
        setName("");
        setErrorMessage("");
        setEmailError("");
      }, 300);
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
          onClick={handleClose}
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
              onClick={handleClose}
              disabled={status === "loading"}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0, 82, 125, 0.2)' }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: 'var(--primary-400)' }} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">You&apos;re on the list!</h3>
                <p className="text-white/70">
                  We&apos;ll reach out when early access is ready.
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
                      onChange={handleEmailChange}
                      placeholder="you@example.com"
                      required
                      disabled={status === "loading"}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none transition-colors disabled:opacity-50 ${
                        emailError 
                          ? 'border-red-400/50 focus:border-red-400' 
                          : 'border-white/10'
                      }`}
                      onFocus={(e) => {
                        if (!emailError) {
                          e.currentTarget.style.borderColor = 'var(--primary-400)';
                        }
                      }}
                      onBlur={(e) => {
                        validateEmail(email);
                        if (!emailError) {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        }
                      }}
                    />
                    {emailError && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {emailError}
                      </motion.p>
                    )}
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg bg-red-500/10 border border-red-400/30"
                    >
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {errorMessage}
                      </p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading" || !!emailError}
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
