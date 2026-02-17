import logo from "@/assets/logo.png";
import { Ribbon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Men Matter" className="w-10 h-10 rounded-full" />
            <div>
              <span className="font-heading text-sm font-bold text-accent tracking-wider">
                MEN MATTER
              </span>
              <p className="text-xs text-primary-foreground/60 tracking-widest flex items-center gap-1">
                <Ribbon size={10} /> think · talk · thrive
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#programs" className="hover:text-accent transition-colors">Programs</a>
            <a href="#get-involved" className="hover:text-accent transition-colors">Get Involved</a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn"].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <span className="text-xs font-bold">{name[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Men Matter Organization. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
