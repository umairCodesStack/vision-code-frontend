import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, RotateCcw, CheckCircle2 } from "lucide-react";
import { courses } from "@/data/mockData";
import { useState } from "react";

const defaultCode = `# Write your solution below
def solve():
    """
    Implement your solution here.
    """
    pass

# Test your solution
if __name__ == "__main__":
    result = solve()
    print(f"Result: {result}")
`;

const testOutput = `> Running tests...
✓ Test 1: Basic case passed
✓ Test 2: Edge case passed  
✗ Test 3: Large input - Time Limit Exceeded
  Expected: < 100ms
  Got: 250ms

2/3 tests passed`;

export default function Practice() {
  const { courseId, moduleId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const module_ = course?.modules.find((m) => m.id === moduleId);
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setOutput("");
    setTimeout(() => {
      setOutput(testOutput);
      setRunning(false);
    }, 1500);
  };

  if (!course || !module_) {
    return (
      <div className="container py-20 text-center">
        <p className="font-display text-xl text-muted-foreground">Module not found.</p>
        <Link to="/courses" className="btn-3d bg-primary text-primary-foreground px-6 py-2 mt-4 inline-block font-display text-sm">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b-2 border-border bg-card px-4 py-2">
        <div className="flex items-center gap-4">
          <Link to={`/courses/${courseId}`} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <span className="font-display text-sm text-foreground font-semibold">{module_.title}</span>
          <span className="text-xs font-display text-muted-foreground px-2 py-0.5 bg-primary/10 text-primary border border-primary/30">
            practice
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setCode(defaultCode)} className="btn-3d bg-card text-muted-foreground p-2 text-xs">
            <RotateCcw className="h-4 w-4" />
          </button>
          <button onClick={handleRun} disabled={running} className="btn-3d bg-primary text-primary-foreground px-4 py-2 font-display text-xs inline-flex items-center gap-2">
            {running ? (
              <>Running...</>
            ) : (
              <><Play className="h-3.5 w-3.5" /> Run Code</>
            )}
          </button>
          <button className="btn-3d bg-card text-primary px-4 py-2 font-display text-xs inline-flex items-center gap-2 border-primary">
            <CheckCircle2 className="h-3.5 w-3.5" /> Submit
          </button>
        </div>
      </div>

      {/* Split view */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Description */}
        <div className="md:w-1/2 border-r-2 border-border overflow-y-auto p-6">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">{module_.title}</h2>
          <div className="font-body text-sm text-muted-foreground space-y-4">
            <p>{module_.description || "Complete the implementation below."}</p>
            <div className="card-3d p-4">
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">Instructions</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Read the problem statement carefully</li>
                <li>Implement the <code className="font-display text-secondary bg-muted px-1">solve()</code> function</li>
                <li>Click "Run Code" to test against sample inputs</li>
                <li>Click "Submit" when all tests pass</li>
              </ul>
            </div>
            <div className="card-3d p-4">
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">Constraints</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Time Limit: 100ms</li>
                <li>Memory Limit: 256MB</li>
                <li>Input size: 1 ≤ n ≤ 10⁵</li>
              </ul>
            </div>
            <div className="card-3d p-4">
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">Example</h3>
              <pre className="font-display text-xs text-secondary bg-background p-3 border-2 border-border overflow-x-auto">
{`Input:  [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9`}
              </pre>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="md:w-1/2 flex flex-col bg-background">
          <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-border bg-card">
            <span className="font-display text-xs text-muted-foreground">solution.py</span>
            <span className="text-xs font-display text-secondary">Python 3.10</span>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              className="flex-1 bg-background text-foreground font-display text-sm p-4 resize-none focus:outline-none leading-relaxed border-none"
              style={{ tabSize: 4 }}
            />
            {/* Output Panel */}
            {output && (
              <div className="border-t-2 border-border bg-card p-4 max-h-48 overflow-y-auto">
                <p className="font-display text-xs text-muted-foreground mb-2">&gt; Output</p>
                <pre className="font-display text-xs text-foreground whitespace-pre-wrap">{output}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
