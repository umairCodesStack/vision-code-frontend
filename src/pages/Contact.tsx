import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-12">
      <h1 className="font-display text-3xl font-extrabold text-foreground mb-2">
        <span className="text-secondary">echo</span> "Get in touch"
      </h1>
      <p className="text-muted-foreground font-body mb-12">Have a question or want to partner with us? Drop us a message.</p>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card-3d p-6">
            <Mail className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-display text-sm font-bold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">hello@cyberacademy.dev</p>
          </div>
          <div className="card-3d p-6">
            <MessageSquare className="h-6 w-6 text-secondary mb-3" />
            <h3 className="font-display text-sm font-bold text-foreground mb-1">Discord</h3>
            <p className="text-sm text-muted-foreground">discord.gg/cyberacademy</p>
          </div>
          <div className="card-3d p-6">
            <MapPin className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-display text-sm font-bold text-foreground mb-1">HQ</h3>
            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="card-3d p-12 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary/20 text-primary font-display text-2xl font-bold border-2 border-border mx-auto mb-4">✓</div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Message Sent!</h2>
              <p className="text-muted-foreground font-body">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="btn-3d bg-card text-foreground px-6 py-2 font-display text-sm mt-6">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-3d p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-display text-sm text-foreground mb-2 block">Name</label>
                  <input required type="text" className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="Your name" />
                </div>
                <div>
                  <label className="font-display text-sm text-foreground mb-2 block">Email</label>
                  <input required type="email" className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="you@email.com" />
                </div>
              </div>
              <div>
                <label className="font-display text-sm text-foreground mb-2 block">Subject</label>
                <input required type="text" className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary" placeholder="What's this about?" />
              </div>
              <div>
                <label className="font-display text-sm text-foreground mb-2 block">Message</label>
                <textarea required rows={6} className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="btn-3d bg-primary text-primary-foreground px-8 py-3 font-display text-sm">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
