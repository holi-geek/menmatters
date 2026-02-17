import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Men Matter" className="w-10 h-10 rounded-full" />
            <div>
              <span className="font-heading text-sm font-bold text-primary text-glow-sm tracking-wider">
                MEN MATTER
              </span>
              <p className="text-xs text-muted-foreground tracking-widest">
                think · talk · thrive
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
            <a href="#get-involved" className="hover:text-primary transition-colors">Get Involved</a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn"].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
              >
                <span className="text-xs font-bold">{name[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Men Matter Organization. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
