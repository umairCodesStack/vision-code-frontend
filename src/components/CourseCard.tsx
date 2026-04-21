import { Link } from "react-router-dom";
import { BookOpen, Users, Star } from "lucide-react";
import type { Course } from "@/data/mockData";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link to={`/courses/${course.id}`} className="card-3d block p-5 group">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block bg-primary/20 text-primary font-display text-xs px-2 py-1 border border-primary/30">
          {course.category}
        </span>
        <span className="inline-block bg-secondary/20 text-secondary font-display text-xs px-2 py-1 border border-secondary/30">
          {course.level}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 font-body">
        {course.description}
      </p>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-primary/20 text-primary font-display text-xs font-bold border border-primary/30">
          {course.instructorAvatar}
        </div>
        <span className="text-sm text-muted-foreground">{course.instructor}</span>
      </div>

      <div className="flex items-center justify-between border-t-2 border-border pt-3">
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-display">
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {course.modules.length} modules
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {course.enrolled.toLocaleString()}
          </span>
          <span className="flex items-center gap-1 text-primary">
            <Star className="h-3.5 w-3.5 fill-primary" />
            {course.rating}
          </span>
        </div>
        <span className="font-display font-bold text-primary text-lg">${course.price}</span>
      </div>
    </Link>
  );
}
