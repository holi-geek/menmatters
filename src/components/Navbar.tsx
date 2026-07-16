import React, { useState, useEffect } from "react";
import { Menu, X, Ribbon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/#home", type: "route" as const },
  { label: "About", href: "/#about", type: "route" as const },
  { label: "Programs", href: "/#programs", type: "route" as const },
  { label: "Framework", href: "/#framework", type: "route" as const },
  { label: "Impact", href: "/#impact", type: "route" as const },
  { label: "Gallery", href: "/gallery", type: "route" as const },
  { label: "Stories", href: "/stories", type: "route" as const },
  { label: "Get Involved", href: "/#get-involved", type: "route" as const },
  { label: "Contact", href: "/#contact", type: "route" as const },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to toggle transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Men Matter logo" className="h-10 w-10 rounded-full" />
          <span className="font-heading text-lg font-bold text-primary tracking-wider">
            MEN MATTER
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;