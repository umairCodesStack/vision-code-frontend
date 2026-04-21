import { Code2, Globe, Users, Award } from "lucide-react";

const values = [
  { icon: Code2, title: "Learn by Doing", desc: "Every course has hands-on coding challenges. No passive video watching." },
  { icon: Globe, title: "Global Community", desc: "Students and instructors from 120+ countries building together." },
  { icon: Users, title: "Expert Instructors", desc: "Learn from engineers at top tech companies and universities." },
  { icon: Award, title: "Industry Ready", desc: "Courses designed to match real job requirements and interview prep." },
];

const team = [
  { name: "Sarah Chen", role: "CEO & Co-founder", initials: "SC", bio: "Former Security Lead at Google. PhD in Computer Science from Stanford." },
  { name: "Marcus Johnson", role: "CTO & Co-founder", initials: "MJ", bio: "Ex-Netflix engineer. Built platforms serving 200M+ users." },
  { name: "Aisha Patel", role: "Head of Curriculum", initials: "AP", bio: "Professor of CS at MIT. Author of 3 bestselling programming books." },
];

export default function About() {
  return (
    <div className="container py-12">
      <h1 className="font-display text-3xl font-extrabold text-foreground mb-2">
        <span className="text-secondary">cat</span> ~/about.md
      </h1>
      <p className="text-muted-foreground font-body mb-12 max-w-2xl">
        CyberAcademy is a marketplace for developer education, built by developers who believe the best way to learn is by writing real code.
      </p>

      {/* Mission */}
      <div className="card-3d p-8 md:p-12 mb-12">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">
          <span className="text-primary">{">"}</span> Our Mission
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-3xl">
          To democratize technical education by giving every developer access to world-class courses with hands-on practice environments. We believe coding is a craft — and like any craft, it requires practice, not just theory.
        </p>
      </div>

      {/* Values */}
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        <span className="text-secondary">{"// "}</span>Our Values
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {values.map((v) => (
          <div key={v.title} className="card-3d p-6">
            <v.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display text-sm font-bold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        <span className="text-primary">$</span> The Team
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((t) => (
          <div key={t.name} className="card-3d p-6">
            <div className="w-16 h-16 flex items-center justify-center bg-primary/20 text-primary font-display text-xl font-bold border-2 border-border mb-4">
              {t.initials}
            </div>
            <h3 className="font-display text-base font-bold text-foreground">{t.name}</h3>
            <p className="text-sm text-primary font-display mb-3">{t.role}</p>
            <p className="text-sm text-muted-foreground font-body">{t.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
