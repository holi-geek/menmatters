import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navLinks: NavItem[] = [
  { label: "Home", href: "/#home" },
  {
    label: "About Us",
    href: "/#about",
    children: [
      { label: "Programs", href: "/#programs" },
      { label: "Framework", href: "/#framework" },
      { label: "Impact", href: "/#impact" },
      { label: "Get Involved", href: "/#get-involved" },
    ],
  },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Stories", href: "/stories" },
  { label: "Contact Us", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
        <Link to="/#home" className="flex items-center gap-2">
          <img src={logo} alt="Men Matter logo" className="h-10 w-10 rounded-full" />
          <span className="font-heading text-lg font-bold text-primary tracking-wider">
            MEN MATTER
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  to={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-md shadow-lg py-2 min-w-[180px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            )
          )}
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
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col">
                  <button
                    onClick={() => setMobileAboutOpen((v) => !v)}
                    className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileAboutOpen && (
                    <div className="pl-4 flex flex-col gap-1 border-l border-border ml-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
