import { Link } from "react-router-dom";
import { ArrowRight, Code2, Shield, Brain, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { courses, testimonials } from "@/data/mockData";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import { useRef } from "react";

const stats = [
  { label: "Active Students", value: "24,000+" },
  { label: "Courses", value: "120+" },
  { label: "Instructors", value: "50+" },
  { label: "Completion Rate", value: "94%" },
];

const features = [
  { icon: Code2, title: "Live IDE Practice", desc: "Split-screen coding environment with real-time execution." },
  { icon: Shield, title: "Cyber Security Labs", desc: "Ethical hacking challenges in sandboxed environments." },
  { icon: Brain, title: "AI-Powered Quizzes", desc: "Adaptive assessments that match your skill level." },
  { icon: Zap, title: "Instant Feedback", desc: "Automated code review and test case validation." },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const courseScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -350 : 350, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-block bg-primary/10 text-primary font-display text-xs px-3 py-1 border-2 border-primary/30 mb-6 animate-fade-in">
            &gt; NEW: Cyber Security Track now live_
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in text-glow-primary">
            Learn to Code.<br />
            <span className="text-primary">Build Real Things.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A marketplace for developers who learn by doing. Courses with articles, quizzes, and hands-on IDE practice — from the best instructors in tech.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/courses" className="btn-3d bg-primary text-primary-foreground px-8 py-3 font-display text-sm inline-flex items-center gap-2">
              Browse Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/instructor" className="btn-3d bg-card text-foreground px-8 py-3 font-display text-sm">
              Become an Instructor
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-3d p-5 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1 font-display">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses Carousel */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            <span className="text-secondary">$</span> Featured_Courses
          </h2>
          <div className="flex gap-2">
            <button onClick={() => scroll(courseScrollRef, "left")} className="btn-3d bg-card text-foreground p-2">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(courseScrollRef, "right")} className="btn-3d bg-card text-foreground p-2">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div ref={courseScrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {courses.map((course) => (
            <div key={course.id} className="min-w-[340px] flex-shrink-0">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container pb-16">
        <h2 className="font-display text-2xl font-bold text-foreground mb-8">
          <span className="text-secondary">{"// "}</span>Why CyberAcademy?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-3d p-6">
              <f.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            <span className="text-primary">{">"}</span> Student_Reviews
          </h2>
          <div className="flex gap-2">
            <button onClick={() => scroll(scrollRef, "left")} className="btn-3d bg-card text-foreground p-2">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(scrollRef, "right")} className="btn-3d bg-card text-foreground p-2">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="card-3d p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl font-extrabold text-foreground mb-4 text-glow-primary">
            Ready to <span className="text-primary">level up</span>?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-lg mx-auto">
            Join thousands of developers building real skills with hands-on courses.
          </p>
          <Link to="/courses" className="btn-3d bg-primary text-primary-foreground px-10 py-3 font-display text-sm inline-flex items-center gap-2">
            Start Learning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
