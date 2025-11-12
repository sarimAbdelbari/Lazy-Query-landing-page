"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/whiteLogo.png"
              alt="LazyQuery"
              width={120}
              height={60}
              
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              How It Works
            </button>
            <a
              href="https://github.com/sarimAbdelbari/LazyQuery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              GitHub
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://lazy-query.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <span>Try Demo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-white/80 hover:text-white transition-colors font-medium py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-white/80 hover:text-white transition-colors font-medium py-2"
            >
              How It Works
            </button>
            <a
              href="https://github.com/sarimAbdelbari/LazyQuery"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/80 hover:text-white transition-colors font-medium py-2"
            >
              GitHub
            </a>
            <a
              href="https://lazy-query.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center w-full justify-center"
            >
              <span>Try Demo</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

