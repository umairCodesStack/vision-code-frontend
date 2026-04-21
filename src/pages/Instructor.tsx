import { useState } from "react";
import { Plus, BookOpen, HelpCircle, Code, FileText, BarChart3, Trash2 } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface PracticeItem {
  title: string;
  description: string;
}

interface ArticleItem {
  title: string;
  content: string;
}

interface InstructorModule {
  id: number;
  title: string;
  type: "article" | "quiz" | "practice";
  quizQuestions?: QuizQuestion[];
  practiceItems?: PracticeItem[];
  articleItems?: ArticleItem[];
}

interface InstructorCourse {
  id: number;
  title: string;
  description: string;
  category: string;
  modules: InstructorModule[];
}

type Tab = "courses" | "analytics";

export default function Instructor() {
  const [tab, setTab] = useState<Tab>("courses");
  const [myCourses, setMyCourses] = useState<InstructorCourse[]>([]);
  const [editingCourse, setEditingCourse] = useState<InstructorCourse | null>(null);
  const [showAddModule, setShowAddModule] = useState(false);
  const [newModuleType, setNewModuleType] = useState<"article" | "quiz" | "practice">("article");
  const [newModuleTitle, setNewModuleTitle] = useState("");

  // Course form state
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseCategory, setCourseCategory] = useState("Web Development");

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse: InstructorCourse = {
      id: Date.now(),
      title: courseTitle,
      description: courseDesc,
      category: courseCategory,
      modules: [],
    };
    setMyCourses([...myCourses, newCourse]);
    setEditingCourse(newCourse);
    setCourseTitle("");
    setCourseDesc("");
  };

  const handleAddModule = () => {
    if (!editingCourse || !newModuleTitle) return;
    const newModule: InstructorModule = {
      id: Date.now(),
      title: newModuleTitle,
      type: newModuleType,
      quizQuestions: newModuleType === "quiz" ? [{ question: "", options: ["", "", "", ""], correctIndex: 0 }] : undefined,
      practiceItems: newModuleType === "practice" ? [{ title: "", description: "" }] : undefined,
      articleItems: newModuleType === "article" ? [{ title: "", content: "" }] : undefined,
    };
    const updated = {
      ...editingCourse,
      modules: [...editingCourse.modules, newModule],
    };
    setEditingCourse(updated);
    setMyCourses(myCourses.map((c) => (c.id === updated.id ? updated : c)));
    setNewModuleTitle("");
    setShowAddModule(false);
  };

  const handleDeleteModule = (moduleId: number) => {
    if (!editingCourse) return;
    const updated = {
      ...editingCourse,
      modules: editingCourse.modules.filter((m) => m.id !== moduleId),
    };
    setEditingCourse(updated);
    setMyCourses(myCourses.map((c) => (c.id === updated.id ? updated : c)));
  };

  const moduleIcons = { article: FileText, quiz: HelpCircle, practice: Code };

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <div className="w-64 border-r-2 border-border bg-card p-4 flex-shrink-0 hidden md:block">
        <h2 className="font-display text-sm font-bold text-foreground mb-6">
          <span className="text-primary">$</span> Instructor Panel
        </h2>
        <div className="space-y-2">
          <button
            onClick={() => { setTab("courses"); setEditingCourse(null); }}
            className={`w-full text-left btn-3d px-4 py-3 font-display text-xs flex items-center gap-2 ${
              tab === "courses" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"
            }`}
          >
            <BookOpen className="h-4 w-4" /> My Courses
          </button>
          <button
            onClick={() => setTab("analytics")}
            className={`w-full text-left btn-3d px-4 py-3 font-display text-xs flex items-center gap-2 ${
              tab === "analytics" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"
            }`}
          >
            <BarChart3 className="h-4 w-4" /> Analytics
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {tab === "courses" && !editingCourse && (
          <div>
            <h1 className="font-display text-2xl font-extrabold text-foreground mb-6">
              <span className="text-secondary">ls</span> ~/my-courses
            </h1>

            {/* Create Course Form */}
            <form onSubmit={handleCreateCourse} className="card-3d p-6 mb-8">
              <h3 className="font-display text-base font-bold text-foreground mb-4">
                <Plus className="inline h-4 w-4 text-primary mr-1" /> Create New Course
              </h3>
              <div className="space-y-4">
                <input
                  required
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="Course Title"
                  className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <textarea
                  required
                  value={courseDesc}
                  onChange={(e) => setCourseDesc(e.target.value)}
                  placeholder="Course Description"
                  rows={3}
                  className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
                <select
                  value={courseCategory}
                  onChange={(e) => setCourseCategory(e.target.value)}
                  className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm focus:outline-none focus:border-primary"
                >
                  <option>Web Development</option>
                  <option>Cyber Security</option>
                  <option>Computer Science</option>
                  <option>AI / ML</option>
                  <option>DevOps</option>
                  <option>Blockchain</option>
                </select>
                <button type="submit" className="btn-3d bg-primary text-primary-foreground px-6 py-2 font-display text-sm">
                  Create Course
                </button>
              </div>
            </form>

            {/* Existing Courses */}
            <div className="space-y-4">
              {myCourses.map((course) => (
                <div key={course.id} className="card-3d p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">{course.title}</h3>
                    <p className="text-xs text-muted-foreground font-body">{course.modules.length} modules · {course.category}</p>
                  </div>
                  <button
                    onClick={() => setEditingCourse(course)}
                    className="btn-3d bg-secondary text-secondary-foreground px-4 py-2 font-display text-xs"
                  >
                    Edit
                  </button>
                </div>
              ))
              }
              {myCourses.length === 0 && (
                <p className="text-muted-foreground font-display text-sm text-center py-8">No courses yet. Create your first one above!</p>
              )}
            </div>
          </div>
        )}

        {tab === "courses" && editingCourse && (
          <div>
            <button onClick={() => setEditingCourse(null)} className="text-muted-foreground hover:text-primary font-display text-sm mb-6 inline-block transition-colors">
              ← Back to Courses
            </button>
            <h1 className="font-display text-2xl font-extrabold text-foreground mb-2">{editingCourse.title}</h1>
            <p className="text-muted-foreground font-body mb-6">{editingCourse.description}</p>

            {/* Modules */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-bold text-foreground">
                <span className="text-secondary">// </span>Modules
              </h2>
              <button
                onClick={() => setShowAddModule(!showAddModule)}
                className="btn-3d bg-primary text-primary-foreground px-4 py-2 font-display text-xs inline-flex items-center gap-1"
              >
                <Plus className="h-3.5 w-3.5" /> Add Module
              </button>
            </div>

            {showAddModule && (
              <div className="card-3d p-5 mb-6 space-y-4">
                <input
                  value={newModuleTitle}
                  onChange={(e) => setNewModuleTitle(e.target.value)}
                  placeholder="Module Title"
                  className="w-full bg-background border-2 border-border text-foreground px-4 py-2.5 font-display text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <div className="flex gap-2">
                  {(["article", "quiz", "practice"] as const).map((type) => {
                    const Icon = moduleIcons[type];
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setNewModuleType(type)}
                        className={`btn-3d px-4 py-2 font-display text-xs flex items-center gap-1 ${
                          newModuleType === type ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" /> {type}
                      </button>
                    );
                  })}
                </div>
                <button onClick={handleAddModule} className="btn-3d bg-secondary text-secondary-foreground px-6 py-2 font-display text-sm">
                  Add
                </button>
              </div>
            )}

            <div className="space-y-3">
              {editingCourse.modules.map((mod) => {
                const Icon = moduleIcons[mod.type];
                return (
                  <div key={mod.id} className="card-3d p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${mod.type === "practice" ? "text-primary" : mod.type === "quiz" ? "text-secondary" : "text-muted-foreground"}`} />
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">{mod.title}</p>
                        <span className={`text-xs font-display px-2 py-0.5 border ${
                          mod.type === "practice" ? "text-primary border-primary/30 bg-primary/10" :
                          mod.type === "quiz" ? "text-secondary border-secondary/30 bg-secondary/10" :
                          "text-muted-foreground border-muted bg-muted/50"
                        }`}>
                          {mod.type}
                        </span>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteModule(mod.id)} className="text-destructive hover:text-destructive/80 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
              {editingCourse.modules.length === 0 && (
                <p className="text-muted-foreground font-display text-sm text-center py-8">No modules yet. Add your first one!</p>
              )}
            </div>
          </div>
        )}

        {tab === "analytics" && (
          <div>
            <h1 className="font-display text-2xl font-extrabold text-foreground mb-6">
              <span className="text-primary">$</span> Analytics
            </h1>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card-3d p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-primary">0</p>
                <p className="text-sm text-muted-foreground font-display mt-1">Total Students</p>
              </div>
              <div className="card-3d p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-secondary">{myCourses.length}</p>
                <p className="text-sm text-muted-foreground font-display mt-1">Courses</p>
              </div>
              <div className="card-3d p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-foreground">$0</p>
                <p className="text-sm text-muted-foreground font-display mt-1">Revenue</p>
              </div>
            </div>
            <div className="card-3d p-8 text-center">
              <p className="text-muted-foreground font-display text-sm">
                Create courses and enroll students to see analytics data here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
