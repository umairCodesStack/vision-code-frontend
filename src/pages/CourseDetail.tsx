import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Play, HelpCircle, Code, Users, Star } from "lucide-react";
import { courses } from "@/data/mockData";

const moduleIcons = {
  article: BookOpen,
  quiz: HelpCircle,
  practice: Code,
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="container py-20 text-center">
        <p className="font-display text-xl text-muted-foreground">Course not found.</p>
        <Link to="/courses" className="btn-3d bg-primary text-primary-foreground px-6 py-2 mt-4 inline-block font-display text-sm">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Link to="/courses" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-display text-sm mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Courses
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-primary/20 text-primary font-display text-xs px-2 py-1 border border-primary/30">{course.category}</span>
            <span className="bg-secondary/20 text-secondary font-display text-xs px-2 py-1 border border-secondary/30">{course.level}</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold text-foreground mb-4">{course.title}</h1>
          <p className="text-muted-foreground font-body text-base mb-6">{course.description}</p>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 flex items-center justify-center bg-primary/20 text-primary font-display text-sm font-bold border-2 border-border">
              {course.instructorAvatar}
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">{course.instructor}</p>
              <p className="text-xs text-muted-foreground">Instructor</p>
            </div>
          </div>

          {/* Modules */}
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <span className="text-secondary">{"// "}</span>Course Modules
          </h2>
          <div className="space-y-3">
            {course.modules.map((mod, idx) => {
              const Icon = moduleIcons[mod.type];
              return (
                <div key={mod.id} className="card-3d p-4 flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-muted font-display text-xs font-bold text-muted-foreground border-2 border-border flex-shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <Icon className={`h-5 w-5 flex-shrink-0 ${mod.type === "practice" ? "text-primary" : mod.type === "quiz" ? "text-secondary" : "text-muted-foreground"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm font-semibold text-foreground">{mod.title}</p>
                    {mod.description && (
                      <p className="text-xs text-muted-foreground font-body truncate">{mod.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {mod.duration && (
                      <span className="text-xs text-muted-foreground font-display">{mod.duration}</span>
                    )}
                    <span className={`text-xs font-display px-2 py-0.5 border ${
                      mod.type === "practice" ? "text-primary border-primary/30 bg-primary/10" :
                      mod.type === "quiz" ? "text-secondary border-secondary/30 bg-secondary/10" :
                      "text-muted-foreground border-muted bg-muted/50"
                    }`}>
                      {mod.type}
                    </span>
                    {mod.type === "practice" && (
                      <Link to={`/practice/${course.id}/${mod.id}`} className="btn-3d bg-primary text-primary-foreground px-3 py-1 font-display text-xs">
                        <Play className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="card-3d p-6 sticky top-24">
            <p className="font-display text-4xl font-extrabold text-primary mb-2">${course.price}</p>
            <button className="btn-3d bg-primary text-primary-foreground w-full py-3 font-display text-sm mb-4">
              Enroll Now
            </button>
            <button className="btn-3d bg-card text-foreground w-full py-3 font-display text-sm mb-6">
              Add to Wishlist
            </button>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between font-display">
                <span className="text-muted-foreground">Modules</span>
                <span className="text-foreground">{course.modules.length}</span>
              </div>
              <div className="flex justify-between font-display">
                <span className="text-muted-foreground">Students</span>
                <span className="text-foreground">{course.enrolled.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-display">
                <span className="text-muted-foreground">Rating</span>
                <span className="text-primary flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-primary" /> {course.rating}
                </span>
              </div>
              <div className="flex justify-between font-display">
                <span className="text-muted-foreground">Level</span>
                <span className="text-foreground">{course.level}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t-2 border-border">
              {course.tags.map((tag) => (
                <span key={tag} className="text-xs font-display px-2 py-1 bg-muted text-muted-foreground border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
