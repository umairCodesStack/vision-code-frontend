import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card mt-20">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold text-primary mb-4">
              <Terminal className="h-5 w-5" />
              <span>{"<CyberAcademy />"}</span>
            </div>
            <p className="text-sm text-muted-foreground font-body">
              The marketplace for developers who learn by building. Code. Hack. Ship.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Platform</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Categories</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Cyber Security</span>
              <span>Web Development</span>
              <span>AI / ML</span>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-secondary transition-colors">GitHub</a>
              <a href="#" className="hover:text-secondary transition-colors">Discord</a>
              <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t-2 border-border pt-6 text-center text-sm text-muted-foreground font-display">
          © 2026 CyberAcademy. All rights reserved. Built for hackers, by hackers.
        </div>
      </div>
    </footer>
  );
}
