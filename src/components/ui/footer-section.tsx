"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Ribbon, Send, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

function Footerdemo() {
  return (
    <footer className="relative border-t border-primary-foreground/10 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Men Matter" className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="font-heading text-sm font-bold text-accent tracking-wider">
                  MEN MATTER
                </h2>
                <p className="text-[10px] text-primary-foreground/60 tracking-widest flex items-center gap-1">
                  <Ribbon size={10} /> think · talk · thrive
                </p>
              </div>
            </div>
            <p className="mb-5 text-sm text-primary-foreground/70">
              Join our newsletter for stories, dialogue schedules, and mental health resources.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative"
            >
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Subscribe"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-accent">Quick Links</h3>
            <nav className="space-y-2 text-sm text-primary-foreground/70">
              <a href="#home" className="block hover:text-accent transition-colors">Home</a>
              <a href="#about" className="block hover:text-accent transition-colors">About</a>
              <a href="#framework" className="block hover:text-accent transition-colors">Framework</a>
              <a href="#programs" className="block hover:text-accent transition-colors">Programs</a>
              <a href="#get-involved" className="block hover:text-accent transition-colors">Get Involved</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-accent">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm text-primary-foreground/70">
              <p>HomaBay, Kenya</p>
              <p>Phone: +254 700 000 000</p>
              <p>
                Email:{" "}
                <a href="mailto:menmatter@gmail.com" className="hover:text-accent transition-colors">
                  menmatter@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Follow */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-accent">Follow Us</h3>
            <TooltipProvider>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a
                        href="#"
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-accent hover:border-accent transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on {label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Men Matter Organization. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
